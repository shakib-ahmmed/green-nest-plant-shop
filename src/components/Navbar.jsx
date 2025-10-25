import React, { useState, useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
import { UserIcon } from "lucide-react";
import { toast } from "react-toastify";

const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);
    const [dropdownOpen, setDropdownOpen] = useState(false);

    const handleLogOut = () => {
        logOut()
            .then(() => {
                toast.success("Logout successfully");
                setDropdownOpen(false);
            })
            .catch((error) => {

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
                        <NavLink to="/" className="flex items-center  gap-2">
                            <img className="lg:w-12 w-10 lg:h-12 h-10" src="/logo.png" alt="logo" />
                            <div className="flex flex-col justify-center">
                                <span className="font-bold text-2xl sm:text-3xl lg:text-4xl text-[#075a12] leading-tight">
                                    GREEN NEST
                                </span>
                                <span className="text-lg sm:text-xl lg:text-2xl tracking-widest text-black">
                                    PLANT SHOP
                                </span>
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
                <div className="navbar-end relative">
                    <div className="hidden lg:flex relative">
                        {user ? (
                            <div className="relative">
                                <button
                                    onClick={() => setDropdownOpen(!dropdownOpen)}
                                    className="flex items-center gap-2 p-2 rounded-full hover:scale-105 transition"
                                >
                                    {user.photoURL ? (
                                        <img className="w-10 h-10 rounded-full object-cover" src={user.photoURL} alt="User" />
                                    ) : (
                                        <UserIcon className="w-10 h-10 text-gray-500" />
                                    )}
                                </button>

                                {dropdownOpen && (
                                    <div className="absolute right-0 mt-2 w-48 bg-white shadow-lg rounded-lg overflow-hidden z-50">
                                        <div className="px-4 py-3 border-b">
                                            <p className="text-gray-800 font-semibold">{user.displayName || "User"}</p>
                                            <p className="text-gray-500 text-sm">{user.email}</p>
                                        </div>
                                        <button
                                            onClick={handleLogOut}
                                            className="w-full text-left px-4 py-2 hover:bg-gray-100 text-gray-800 font-medium"
                                        >
                                            Logout
                                        </button>
                                    </div>
                                )}
                            </div>
                        ) : (
                            <Link
                                to="/auth/login"
                                className="btn bg-[#075a12] text-white font-semibold w-[145px] h-[45px] hover:scale-105 transition ease-in-out flex items-center justify-center"
                            >
                                Login
                            </Link>
                        )}
                    </div>
                    <div className="lg:hidden relative">
                        {user ? (
                            <div className="relative">
                                <button
                                    onClick={() => setDropdownOpen(!dropdownOpen)}
                                    className="flex items-center gap-2 p-2 rounded-full hover:scale-105 transition"
                                >
                                    {user.photoURL ? (
                                        <img className="w-10 h-10 rounded-full object-cover" src={user.photoURL} alt="User" />
                                    ) : (
                                        <UserIcon className="w-10 h-10 text-gray-500" />
                                    )}
                                </button>

                                {dropdownOpen && (
                                    <ul className="absolute right-0 mt-2 w-48 bg-white shadow-lg rounded-lg overflow-hidden z-50 text-gray-800">
                                        <li>
                                            <NavLink
                                                to="/MyProfile"
                                                className="block px-4 py-2 hover:bg-gray-100"
                                                onClick={() => setDropdownOpen(false)}
                                            >
                                                {user.displayName || "Profile"}
                                            </NavLink>
                                        </li>
                                        <li>
                                            <button
                                                onClick={handleLogOut}
                                                className="w-full text-left px-4 py-2 hover:bg-gray-100"
                                            >
                                                Logout
                                            </button>
                                        </li>
                                    </ul>
                                )}
                            </div>
                        ) : (
                            <Link
                                to="/auth/login"
                                className="btn bg-[#075a12] text-white font-semibold w-[120px] h-[40px] hover:scale-105 transition ease-in-out flex items-center justify-center"
                            >
                                Login
                            </Link>
                        )}
                    </div>
                </div>
            </div>

        </div >
    );
};




export default Navbar;
