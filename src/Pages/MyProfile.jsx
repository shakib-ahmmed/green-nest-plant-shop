import React, { useContext, useState, useEffect } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import { updateProfile } from 'firebase/auth';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



const MyProfile = () => {
    const { user, setUser } = useContext(AuthContext);

    const [displayName, setDisplayName] = useState(user?.displayName || "");
    const [photoURL, setPhotoURL] = useState(user?.photoURL || "");



    const [previewPhoto, setPreviewPhoto] = useState(user?.photoURL || "");
    useEffect(() => {
        setPreviewPhoto(photoURL || user?.photoURL || '');
    }, [photoURL, user]);

    const handleUpdate = async (e) => {
        e.preventDefault();
        if (!displayName.trim()) {
            toast.warn("Name cannot be empty", { position: "top-center" });
            return;
        }
        try {
            await updateProfile(user, { displayName, photoURL });
            setUser({ ...user, displayName, photoURL });
            toast.success("Profile updated successfully!", { position: "top-center" });
        } catch (error) {
            console.error(error);
            toast.error("Failed to update profile!", { position: "top-center" });
        }

    };




    return (
        <div className="flex justify-center min-h-screen items-center bg-blue-100 p-4">
            <div className="card bg-base-100 w-full max-w-3xl shadow-xl p-6 flex flex-col md:flex-row gap-6">
                <div className="flex flex-col items-center md:items-start">
                    {previewPhoto && (
                        <img
                            src={previewPhoto}
                            alt="Profile Preview"
                            className="w-80 h-60  border-2 border-gray-300 object-cover shadow-sm mb-4"
                        />
                    )}
                    <p className="text-m text-gray-500">User UID: <span className="font-medium">{user?.uid}</span></p>
                    <p className="text-m text-emerald-700 mt-1">
                        Account Created:
                        <span className="font-medium">{new Date(user?.metadata?.creationTime).toLocaleDateString()}</span>
                    </p>
                </div>
                <div className="flex-1">
                    <h2 className="text-2xl font-bold mb-4">My Profile</h2>
                    <form onSubmit={handleUpdate} className="space-y-4">

                        <div>
                            <label className="label font-semibold">Full Name</label>
                            <input
                                type="text"
                                className="input input-bordered w-full"
                                value={displayName}
                                onChange={(e) => setDisplayName(e.target.value)}
                            />
                        </div>
                        <div>
                            <label className="label font-semibold">Photo URL</label>
                            <input
                                type="text"
                                className="input input-bordered w-full"
                                value={photoURL}
                                onChange={(e) => setPhotoURL(e.target.value)}
                            />
                        </div>
                        <div>
                            <label className="label font-semibold">Email</label>
                            <input
                                type="email"
                                className="input input-bordered w-full bg-gray-100"
                                value={user?.email}
                                disabled
                            />
                        </div>
                        <button
                            type="submit"
                            className="btn btn-neutral w-full mt-4"
                        >
                            Update Profile
                        </button>
                    </form>
                </div>
            </div>

            <ToastContainer />
        </div>
    );
};

export default MyProfile;
