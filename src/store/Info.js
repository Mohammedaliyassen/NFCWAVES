import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getInfo } from './store'; // تأكد من استيراد الـ thunk

const MyComponent = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getInfo()); // استدعاء الـ thunk لجلب البيانات
    }, [dispatch]);

    return (
        <div>Fetching data...</div>
    );
};

export default MyComponent;
