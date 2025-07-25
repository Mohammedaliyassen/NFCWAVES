// src/components/ProtectedRoute.js

import { React } from 'react';
import { Navigate } from 'react-router-dom';
import PocketBase from 'pocketbase';

const ProtectedRoute = ({ children }) => {
  const pb = new PocketBase('https://waves.pockethost.io');
  
  // تحقق من صحة التوكن المخزن في المتصفح
  const isAuthenticated = pb.authStore.isValid;

  if (!isAuthenticated) {
    // إذا لم يكن مسجلاً، قم بتوجيهه لصفحة تسجيل الدخول
    return <Navigate to="/login" replace />;
  }

  // إذا كان مسجلاً، قم بعرض المحتوى (صفحة التعديل)
  return children;
};

export default ProtectedRoute;