import React, { use, useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../Provider/AuthProvider';

const Login = () => {
    const [error, setError] = useState("");

    const { signIn } = use(AuthContext);
    const location = useLocation();
    console.log(location);
    const navigate = useNavigate();
    // const from = location.state?.from || '/';


    const handleLogin = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log({ email, password });
        signIn()
            .then((result) => {
                const user = result.user;
                console.log(user);
                navigate(`${location.state ? location.state : "/"}`)
            }).catch((error) => {
                const errorCode = error.code;
                // const errorMassage = error.code;
                // alert(errorCode, errorMassage);
                setError(errorCode)
            });



        // localStorage.setItem("userToken", "token");
        // navigate(form, { replace: true });
    };

    return (
        <div className='flex justify-center min-h-screen items-center'>
            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                <h2 className='flex justify-center font-semibold text-2xl py-4 text-center'>Login Your Account</h2>
                <form
                    onSubmit={handleLogin}
                    className="card-body">
                    <fieldset className="fieldset">
                        {/* Email */}
                        <label className="label">Email</label>
                        <input
                            name='email'
                            type="email"
                            className="input"
                            placeholder="Email"
                            required />

                        {/* Password */}
                        <label className="label">Password</label>
                        <input
                            name='password'
                            type="password"
                            className="input"
                            placeholder="Password"
                            required />

                        <div><a className="link link-hover">Forgot password?</a></div>

                        <button type='submit' className="btn btn-neutral mt-4">
                            Login</button>

                        <p className='font-semibold text-center pt-5'>
                            Don't Have An Account?
                            <Link
                                to="/auth/register"
                                className='text-secondary'
                            > Register</Link>
                        </p>
                    </fieldset>
                </form>
            </div>
        </div>
    );
};

export default Login;
