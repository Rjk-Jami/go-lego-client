import React, { createContext, useEffect, useState } from 'react';
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import app from '../firebase/firebase.config';
import { toast } from 'react-hot-toast';

export const AuthContext = createContext(null)


const AuthProvider = ({ children }) => {
    const auth = getAuth(app);
    const googleProvider = new GoogleAuthProvider();


    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)


    const CreateUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const login = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    const SignOutUser = () => {
        setLoading(true)
        setUser('')
        toast.success('logout')

        return signOut(auth)
    }

    const loginWithGoogle = () => {
        setLoading(true)
        return signInWithPopup(auth, googleProvider)
    }



    //monitor auth state
    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser)
            console.log(currentUser)
            setLoading(false)
        })
        return () => { unSubscribe() }
    }, [])


    const AuthInfo = {
        auth,
        user,
        loading,
        login,
        CreateUser,
        SignOutUser,
        loginWithGoogle,
        setLoading


    }




    return (
        <AuthContext.Provider value={AuthInfo}>
            {children}
        </AuthContext.Provider>
    );
};




export default AuthProvider;