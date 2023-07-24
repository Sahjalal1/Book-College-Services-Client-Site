import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";
import app from '../firebase/firebase.config'

export const AuthContext = createContext(null)

    const auth = getAuth(app)

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)

    const createUser = (email, password) =>{
        setLoading(false);
        return createUserWithEmailAndPassword(auth, email, password);  
      
    }

    const signIn = (email, password) =>{
        setLoading(false);
        return signInWithEmailAndPassword(auth, email, password)
    }

    const logOut = () => {
        setLoading(false)
        return signOut(auth);
    }

    
    
    const updateUserData = (user, name, photo) =>{
        setLoading(false)
        console.log(user, name, photo)
        updateProfile(user, {
            displayName: name,
            photoURL: photo
        })
        
    }

    // observer user auth state
    useEffect(()=>{
       const undubscribe = onAuthStateChanged(auth, currectUser =>{
            setUser(currectUser);
            setLoading(false)
        })
        
        return()=>{
            return undubscribe();
        }
    }, []);

    const authInfo = {
        user,
        loading,
        createUser,
        signIn,
        logOut,
        updateUserData
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;