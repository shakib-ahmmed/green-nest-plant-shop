import React, { createContext, useEffect, useState } from 'react';
import app from '../Firebase/firebase.config';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";

export const AuthContext = createContext();


const auth = getAuth(app);
const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    const createUser = (email, Password) => {
        return createUserWithEmailAndPassword(auth, email, Password);

    };

    const signIn = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    };


    const logOut = () => {
        return signOut(auth);
    };

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currenteUser) => {
            setUser(currenteUser);
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
    };
    return <AuthContext.Provider value={authData} >
        {children}
    </AuthContext.Provider>

};

export default AuthProvider;