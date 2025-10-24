
import { Link, useNavigate } from 'react-router-dom';
import React, { useState, useContext } from 'react';

import { AuthContext } from '../Provider/AuthProvider';
import { toast } from 'react-toastify';








const Register = () => {
    const { createUser, setUser, updateUser } = useContext(AuthContext);
    const [nameError, setNameError] = useState("");


    const navigate = useNavigate();

    const handleRegister = (e) => {
        e.preventDefault();

        const form = e.target;
        const name = form.name.value;

        const photo = form.photo.value;

        const email = form.email.value;
        const password = form.password.value;

        if (name.length < 5) {
            setNameError("Name should be more than 5 characters");

            toast.warn("Name should be more than 5 characters!");
            return;
        } else {
            setNameError("");
        }


        createUser(email, password)
            .then((result) => {
                const user = result.user;
                updateUser({ displayName: name, photoURL: photo })
                    .then(() => {
                        setUser({ ...user, displayName: name, photoURL: photo });
                        toast.success("Registration Successful");
                        navigate('/');
                    })


                    .catch(() => {
                        setUser(user);
                        toast.info("User created but profile update failed.");
                    });
            })

            .catch((error) => {
                toast.error(`❌ ${error.message}`);
            });
    };

    return (
        <div className='flex justify-center min-h-screen items-center'>
            <div className="card bg-base-100 w-full max-w-sm shadow-2xl">
                <h2 className='text-center font-semibold text-2xl py-4'>
                    Register Your Account
                </h2>
                <form onSubmit={handleRegister} className="card-body">
                    <fieldset className="fieldset">
                        <label className="label">Your Name</label>
                        <input
                            name='name'
                            type="text"
                            className="input"
                            placeholder="Name"
                            required
                        />
                        {nameError && <p className='text-red-600'>{nameError}</p>}

                        <label className="label">Photo URL</label>
                        <input
                            name='photo'
                            type="text"
                            className="input"
                            placeholder="Photo URL"
                            required
                        />

                        <label className="label">Email</label>
                        <input
                            name='email'
                            type="email"
                            className="input"
                            placeholder="Email"
                            required
                        />

                        <label className="label">Password</label>
                        <input
                            name='password'
                            type="password"
                            className="input"
                            placeholder="Password"
                            required
                        />

                        <button type='submit' className="btn btn-neutral mt-4 w-full">
                            Register
                        </button>

                        <p className='font-semibold text-center pt-5'>
                            Already have an account?
                            <Link
                                to="/auth/login"
                                className='text-secondary ml-1'>
                                Login
                            </Link>
                        </p>
                    </fieldset>
                </form>
            </div>
        </div>
    );
};

export default Register;
