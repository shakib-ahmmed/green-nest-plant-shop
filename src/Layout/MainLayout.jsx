
import React from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Loading from '../Pages/Loading';




const MainLayout = () => {
    const { state } = useNavigate()
    return (
        <div className='flex flex-col min-h-screen'>

            <Navbar />
            {import.meta.env.VITE_name}
            <div className='flex-1 w-11/12 mx-auto py-5 '>
                {state == "loading" ? < Loading /> : <Outlet></Outlet>}
            </div>

            <Footer />

        </div>
    );
};

export default MainLayout;