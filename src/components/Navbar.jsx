import React, { use } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
import { UserIcon } from "lucide-react";

const Navbar = () => {
    const { user, logOut } = use(AuthContext);
    const handleLogOut = () => {
        logOut()
            .then(() => {
                alert("logout susscefully")

            }).catch((error) => {

            });
    };

    return (
        <div>

            <div className="navbar bg-base-100 shadow-sm pb-5 lg:pl-[80px] lg:pr-[80px]">
                <div className="navbar-start">
                    <div className="dropdown pb-5">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 ">
                            <li>
                                <NavLink to='/'>
                                    <a >Home</a>
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to='/Plant'>
                                    <a>Plants</a>
                                </NavLink >
                            </li>
                            <li>
                                <NavLink to='/MyProfile'>
                                    <a>My Profile</a>
                                </NavLink>
                            </li>
                        </ul>
                    </div >
                    <div className='flex items-center'>
                        <NavLink to="/" className="flex items-center gap-3">
                            <img className="w-12 h-12" src="/logo.png" alt="logo" />
                            <div className="flex flex-col">
                                <span className="font-bold lg:text-2xl text-[#075a12] leading-tight">GREEN NEST</span>
                                <span className="lg:visible  text-m tracking-widest text-black">  PLANT SHOP</span>
                            </div>
                        </NavLink>
                    </div>

                </div>
                <div className="navbar-center font-bold hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <NavLink to='/'>
                            <li>
                                <a >Home</a>
                            </li>
                        </NavLink>
                        <NavLink to='/Plant'>
                            <li>
                                <a>Plants</a>
                            </li>
                        </NavLink>
                        <NavLink to='/MyProfile'>
                            <li>
                                <a>My Profile</a>
                            </li>
                        </NavLink>
                    </ul>

                </div>
                <div className="navbar-end flex items-center gap-3">
                    {user ? (
                        <button
                            onClick={handleLogOut}
                            className="btn bg-[#075a12] text-white font-semibold w-[130px] h-[50px] flex items-center gap-2 px-3 hover:scale-105 transition"
                        >
                            <img
                                className="w-10 h-10 rounded-full object-cover"
                                src={user.photoURL || UserIcon}
                                alt="User"
                            />
                            LogOut
                        </button>
                    ) : (
                        <Link
                            to="/auth/login"
                            className="btn bg-[#075a12] text-white font-semibold w-[145px] h-[45px] hover:scale-105 transition ease-in-out flex items-center justify-center"
                        >
                            Login
                        </Link>
                    )}
                </div>


            </div>

        </div >
    );
};




export default Navbar;
