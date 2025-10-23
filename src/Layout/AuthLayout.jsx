import React from 'react';
import Navbar from '../components/Navbar';
import { Outlet } from 'react-router';
import Footer from '../components/Footer';

const AuthLayout = () => {
    return (
        <div className='bg-base-200 '>
            <header className=' mx-auto py-4 '>
                <Navbar />
            </header>
            <main className='w-11/12 mx-auto py-5'>
                <Outlet />
            </main>
            <footer className=' mx-auto py-4' >
                <Footer />
            </footer >
        </div>
    );
};

export default AuthLayout; 