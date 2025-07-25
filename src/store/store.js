import { configureStore, createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import PocketBase from 'pocketbase';

const pb = new PocketBase('https://waves.pockethost.io');
export const getInfo = createAsyncThunk(
    'user/getInfo', 
    async (_, { rejectWithValue }) => {
    try {
        const data = await pb.collection('user').getFullList({ sort: '-created' });
        return data;
    } catch (error) {
        console.log('API fetch error:', error);
        return rejectWithValue(error.message);
    }
});


export const fetchProfileById = createAsyncThunk(
    'profile/fetchProfileById',
    async (userId, { rejectWithValue }) => {
        if (!userId) {
            return rejectWithValue('Missing user ID');
        }
        try {
            // نستخدم كائن `pb` لجلب مستخدم واحد بواسطة الـ ID
            const record = await pb.collection('user').getOne(userId, {
                expand: 'stories',
            });
            console.log(record)
            return record;
        } catch (error) {
            console.log('API fetch error:', error);
            return rejectWithValue(error.message);
        }
    }
);

export const updateUserProfile = createAsyncThunk(
    'profile/updateUserProfile',
    async ({ id, formData }, { rejectWithValue }) => {
        try {
            // **الإصلاح**: نستخدم كائن `pb` لتحديث بيانات المستخدم
            const record = await pb.collection('User').update(id, formData);
            return record;
        } catch (error) {
            console.log('API fetch error:', error);
            return rejectWithValue(error.message);
        }
    }
);

const userSlice = createSlice({
    name: 'user',
    initialState: {
        data: null,
        loading: false,
        error: null
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getInfo.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(getInfo.fulfilled, (state, action) => {
                state.loading = false;
                // PocketBase `getFullList` تعيد مصفوفة مباشرة
                // لذا نخزنها في كائن متوافق مع الكود القديم
                state.data = { items: action.payload };
            })
            .addCase(getInfo.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            });
    }
});

const profileSlice = createSlice({
    name: 'profile',
    initialState: {
        data: null, 
        loading: false,
        error: null,
        updateStatus: 'idle', 
    },
    reducers: {
        clearProfile: (state) => {
            state.data = null;
            state.error = null;
            state.loading = false;
            state.updateStatus = 'idle';
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchProfileById.pending, (state) => {
                state.loading = true;
                state.updateStatus = 'idle';
                state.error = null;
                console.log(state.loading)
                console.log(state.updateStatus)
                console.log(state.error)
            })
            .addCase(fetchProfileById.fulfilled, (state, action) => {
                state.loading = false;
                state.data = action.payload;
                console.log(state.data)
            })
            .addCase(fetchProfileById.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
                console.log(state.error)
            })
            // حالات تحديث بيانات المستخدم
            .addCase(updateUserProfile.pending, (state) => {
                state.updateStatus = 'loading';
                state.error = null;
            })
            .addCase(updateUserProfile.fulfilled, (state, action) => {
                state.updateStatus = 'succeeded';
                state.data = action.payload; // تحديث البيانات بالمعلومات الجديدة
            })
            .addCase(updateUserProfile.rejected, (state, action) => {
                state.updateStatus = 'failed';
                state.error = action.payload; // تخزين رسالة الخطأ
            });
    }
});

// --- إعداد الـ Store الرئيسي ---
const store = configureStore({
    reducer: {
        user: userSlice.reducer,
        profile: profileSlice.reducer
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false,
        }),
});

export const { clearProfile } = profileSlice.actions;

export default store;
