import React, { createContext, useState,useEffect } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import app from '../Firebase/Firebase.config';



export const AuthContext = createContext();

const auth = getAuth(app);

const UserContext = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);


    const createUser = (email,password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const logIn = (email,password) => {
        return signInWithEmailAndPassword(auth, email, password);
    }
   
    const logOut = () => {
        return signOut(auth);
         }

useEffect(() => {
   const unSubscribe = onAuthStateChanged(auth, currentUser => {
        console.log("Current user sated change", currentUser);
       setUser(currentUser);
       setLoading(false);
   })
    return () => unSubscribe();
},[])

const  authInfo = {user,loading,createUser,logIn,logOut,}
    return (
        <AuthContext.Provider value={authInfo}>
            {
                children
            }
       </AuthContext.Provider>
            
       
    );
};

export default UserContext;