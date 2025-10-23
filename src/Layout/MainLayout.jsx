
import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';




const MainLayout = () => {
    return (
        <div className='flex flex-col min-h-screen'>

            <Navbar />

            <div className='flex-1 max-w-screen-2x1 w-full '>
                <Outlet></Outlet>
            </div>

            <Footer />

        </div>
    );
};

export default MainLayout;