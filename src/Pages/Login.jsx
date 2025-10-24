import React, { useState, useContext } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../Provider/AuthProvider';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
    const [error, setError] = useState("");
    const { signIn } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || '/';

    const handleLogin = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;

        if (!email || !password) {
            toast.warn("Please enter both email and password");
            return;
        }

        signIn(email, password)
            .then((result) => {
                const user = result.user;
                localStorage.setItem("userToken", "token");

                toast.success("Login successful!", { position: "top-center" });
                navigate(from, { replace: true });
            })
            .catch((err) => {
                setError(err.message);
                toast.error(`Login failed: ${err.message}`, { position: "top-center" });
            });
    };

    return (
        <div className='flex justify-center min-h-screen items-center bg-gray-50'>
            <div className="card bg-base-100 w-full max-w-sm shadow-2xl">
                <h2 className='text-2xl font-semibold text-center py-4'>Login Your Account</h2>
                <form onSubmit={handleLogin} className="card-body">
                    <fieldset className="space-y-3">
                        <label className="label">Email</label>
                        <input
                            name='email'
                            type="email"
                            className="input input-bordered w-full"
                            placeholder="Email"
                            required
                        />

                        <label className="label">Password</label>
                        <input
                            name='password'
                            type="password"
                            className="input input-bordered w-full"
                            placeholder="Password"
                            required
                        />

                        {error && <p className='text-red-600'>{error}</p>}

                        <button type='submit' className="btn btn-neutral w-full mt-4">Login</button>

                        <p className='font-semibold text-center pt-5'>
                            Don't Have An Account?
                            <Link to="/auth/register" className='text-secondary ml-1'>Register</Link>
                        </p>
                    </fieldset>
                </form>
            </div>
            <ToastContainer />
        </div>
    );
};

export default Login;
