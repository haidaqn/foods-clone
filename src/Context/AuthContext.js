import React, { useContext, createContext, useState, useEffect } from 'react';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged } from 'firebase/auth';
import { auth } from '../firebase';

const Context = createContext();

export const ContextProvider = ({ children }) => {
    //
    const [user, setUser] = useState({});

    //dang xuat
    const logOut = () => {
        return signOut(auth);
    };

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
        });
        return () => {
            unsubscribe();
        };
    });

    return <Context.Provider value={{ signOut, logOut, user }}>{children}</Context.Provider>;
};

export const UserManagement = () => {
    return useContext(Context);
};
