import { FC } from 'react';
import { Navigate } from 'react-router-dom';

const PublicRoute: FC<{ children: React.ReactNode }> = ({ children }) => {
    const authToken = localStorage.getItem('token');
    return !authToken ? <>{children}</> : <Navigate to="/courses" replace />;
};

export default PublicRoute;
