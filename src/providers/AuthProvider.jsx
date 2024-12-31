import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import React, { createContext, useEffect, useState } from "react";
import { auth } from "../firebase.init";

export const AuthContext = createContext(null);

    const googleProvider = new GoogleAuthProvider()

const AuthProvider = ({ children }) => {
    const name = "potato alu mia";

    const [user,setUser] = useState(null)
    const [loading,setLoading] = useState(true)

    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password);
    };
    const signInUser = (email,password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth,email,password)
    }

    const signInWithGoogle = ( ) => {
        return signInWithPopup(auth,googleProvider)
    }

    const signOutUser = () =>{
        setLoading(true)
        return signOut(auth, )
    }

    useEffect(()=>{
       const unSubscribe = onAuthStateChanged(auth, currentUser => {
            console.log("Current user", currentUser)
            setUser(currentUser)
            setLoading(false)
        })

        return () => {
            unSubscribe();
        }
    },[])

    const authInfo = {
        name,
        createUser,
        signInUser,
        user,
        signOutUser,
        loading,
        signInWithGoogle
    };

    return (
        <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
    );
};

export default AuthProvider;

/**
 * 1. create context with null as default
 * 2. create provider
 * 3. set a value
 * 4. use the authProvider in the main.jsx
 * 5. access the children inside the authProvider in the main.jsx
 * 7. export AuthContext
 *  */
