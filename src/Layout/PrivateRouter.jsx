import React, { use } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';
import Loading from '../Pages/Loading';

const PrivateRouter = ({ children }) => {
    const { user, loading } = use(AuthContext)


    const location = useLocation();

    if (loading) {
        <Loading></Loading>
    };
    if (user && user?.email) {
        return children;
    }
    return (
        <Navigate
            to="/auth/login"
            replace
            state={{ from: location }}>
        </Navigate>
    );
};

export default PrivateRouter;