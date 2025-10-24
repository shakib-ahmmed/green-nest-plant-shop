import React, { createContext, useEffect, useState } from 'react';
import app from '../Firebase/firebase.config';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateCurrentUser } from "firebase/auth";
import { updateProfile } from 'firebase/auth/web-extension';

export const AuthContext = createContext();


const auth = getAuth(app);
const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoadin] = useState(true);

    const createUser = (email, Password) => {
        setLoadin(true);
        return createUserWithEmailAndPassword(auth, email, Password);

    };

    const signIn = (email, password) => {
        setLoadin(true);
        return signInWithEmailAndPassword(auth, email, password);
    };

    const updateUser = (updatedData) => {
        return updateProfile(auth.currentUser, updatedData);
    }

    const logOut = () => {
        return signOut(auth);
    };

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currenteUser) => {
            setUser(currenteUser);
            setLoadin(false);
        });
        return () => {
            unsubscribe();
        }
    }, []);

    const authData = {
        user,
        setUser,
        createUser,
        logOut,
        signIn,
        loading,
        setLoadin,
        updateUser,
    };
    return <AuthContext.Provider value={authData} >
        {children}
    </AuthContext.Provider>

};

export default AuthProvider;