import { Password } from "@mui/icons-material";
import { createContext, useContext, useEffect, useState } from "react";
import { onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";

import { auth } from "../firebase";

export const authContext=createContext() //crear provedor y devolver objetos

export const useAuth=()=>{
    const context=useContext(authContext)
    return context
}

export function AuthProvider({children}){
    const[user,setUser]=useState(null);
    const login =(email,password) => signInWithEmailAndPassword(auth,email,password)
    const logout = () => signOut(auth);
      
    useEffect(()=>{
        onAuthStateChanged(auth, currentUser =>{
            setUser(currentUser);
            console.log(user,"hola")
        })
    },[])


    return(
        <authContext.Provider value={{login,user,logout}}>
        {children}
        </authContext.Provider>

    )
}