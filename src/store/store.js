import { configureStore, createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// رابط الـ API الصحيح
const pbUrl = 'https://waves.pockethost.io/api/collections/User/records/';

export const getInfo = createAsyncThunk('user/getInfo', async () => {
    try {
        console.log('Fetching from API:', pbUrl);
        const res = await fetch(pbUrl);
        if (!res.ok) throw new Error('Network response was not ok');
        const text = await res.text();
        console.log('API Response:', text);
        const data = JSON.parse(text); // تحويل النص إلى JSON
        return data;
    } catch (error) {
        console.log('API fetch error:', error);
        throw error; // رمي الخطأ ليتم معالجته في extraReducers
    }
});

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
                state.data = action.payload;
            })
            .addCase(getInfo.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            });
    }
});

const store = configureStore({
    reducer: {
        user: userSlice.reducer
    }
});

export default store;
