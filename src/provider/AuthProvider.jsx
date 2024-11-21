import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from '../firebase/firebase.config';
import toast from 'react-hot-toast';


export const AuthContext = createContext()
const auth = getAuth(app)
const provider = new GoogleAuthProvider();

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)
    const [blogData, setData] = useState({})
    const [review, setReview] = useState({})


    const googleAuth = () =>{
      setLoading(true)
    return  signInWithPopup(auth, provider)
    }
    const createNewUser = (email, password) =>{

       
        return createUserWithEmailAndPassword(auth, email, password)
    }

    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
           setUser(currentUser)
           setLoading(false)
         })
         return () =>{
           unsubscribe()
         }
       }, [])

       const logOut = () =>{
        setLoading(true)
       toast.success("Successfully logout.")
        return signOut(auth)
       }
     const userLogin = (email, password)=>{
   
      return signInWithEmailAndPassword(auth, email, password)
      
      }

      useEffect(()=>{
        
          fetch('blog.json')
          .then(res => res.json())
          .then(blog => setData(blog))
         
        

        
      }, [])

      useEffect(()=>{
          fetch('review.json')
          .then(res => res.json())
          .then(data => setReview(data))
      },[])

     const updateUserProfile = (updateData) => {
      return  updateProfile(auth.currentUser, updateData)
     }

  

    const authInfo = {
        user, setUser,
        createNewUser,
        logOut,
        userLogin,
        loading,
        updateUserProfile,
        googleAuth,
        blogData,
        setLoading,
        review
    }

  


    return (
        <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
    );
};

export default AuthProvider;