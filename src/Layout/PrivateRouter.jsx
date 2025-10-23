import React, { use } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';
import Loading from '../Pages/Loading';

const PrivateRouter = ({ children }) => {
    const { user, loading } = use(AuthContext)
    // console.log(user);

    const location = useLocation();

    if (loading) {
        <Loading></Loading>
    };
    if (user && user?.email)
        return children;
    return <Navigate
        state={location.pathname}
        to='/auth/login'>
    </Navigate>
};

export default PrivateRouter;