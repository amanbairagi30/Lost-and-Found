import React, { useEffect } from 'react'
import MLV from "../NAVBAR/MLV-LOGO.png"
import { auth, provider } from "../../firebase"
import { signInWithPopup, signOut } from 'firebase/auth'
import { useAuthState } from "react-firebase-hooks/auth"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// djsa
const NavBar = () => {

    const signIn = () => {
        signInWithPopup(auth, provider)
            .then(resp => console.log("Signed In"))
            .catch(err => console.log(err))
        toast.success("Signed in Succesful", {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
        });
    }

    const logOut = async () => {
        await signOut(auth)
        toast.success("Signed Out Succesful", {
            position: "top-center",
            autoClose: 1000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
        });
    }

    const [user] = useAuthState(auth);

    return (
        <nav className="navbar">
            <div className="nav-content">
                <div className="logo">
                    <img src={MLV} alt="MLV TEXTILE COLLEGE" />
                    <div className="heading">MLV TEXTILE AND ENGINEERING COLLEGE BHILWARA(RAJASTHAN)</div>
                </div>
                {/* <div className="title">Lost and Found</div> */}
                <div className="auth-btn">

                    {user ?
                        <div className="auth-details">
                            {/* <span>{user.displayName}</span> */}
                            <img src={user?.photoURL} alt="" />

                            <button onClick={logOut}>Sign Out</button>
                        </div>
                        : <button onClick={signIn}>Sign In</button>
                    }
                    <ToastContainer />
                </div>
            </div>
        </nav>
    )
}

export default NavBar
