import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { AppContext } from './appContext';

export default function ProtectedRoute({ children }) {
  const login = useContext(AppContext); 
    if (!login.isLogIn) return <Navigate to='/' />;
    return <>{children}</>;
}