import {
    createUserWithEmailAndPassword,
    GoogleAuthProvider,
    onAuthStateChanged,
    signInWithEmailAndPassword,
    signInWithRedirect,
    signOut,
    updateProfile
} from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { auth } from "../firebase/firebase.config";
import axios from "axios";

// eslint-disable-next-line react-refresh/only-export-components
export const AuthContext = createContext("");
const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    // sign in with google
    const signInWithGoogle = () => {
        setLoading(true);
        return signInWithRedirect(auth, googleProvider);
    }
    // create user with email
    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }
    // login user with email
    const loginUser = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }
    // update profile user
    const updateProfileUser = (name, photo) => {
        return updateProfile(auth.currentUser, {
            displayName: name,
            photoURL: photo,
        })
    }
    // logou
    const logOutUser = () => {
        setLoading(true);
        return signOut(auth);
    }
    const authInfo = {
        user,
        loading,
        signInWithGoogle,
        logOutUser,
        createUser,
        loginUser,
        updateProfileUser
    }
    // observer 
    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, async (currentUser) => {
            console.log(currentUser);
            if (currentUser?.email) {
                setUser(currentUser)

                // Get JWT token
                await axios.post(
                    `${import.meta.env.VITE_API_URL}/jwt`,
                    {
                        email: currentUser?.email,
                    },
                    { withCredentials: true }
                )
            } else {
                setUser(currentUser)
                await axios.get(`${import.meta.env.VITE_API_URL}/logout`, {
                    withCredentials: true,
                })
                setLoading(false);
            }
            setLoading(false)
        })
        return () => {
            unSubscribe();
        }
    }, [])
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;