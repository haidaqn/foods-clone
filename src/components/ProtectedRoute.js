import React from 'react';
import { Navigate } from 'react-router-dom';
import { UserManagement } from '../Context/AuthContext';

const ProtectedRoute = ({ children }) => {
    const { user } = UserManagement();

    if (!user) {
        return <Navigate to="/" />;
    } else {
        return children;
    }
};

export default ProtectedRoute;
