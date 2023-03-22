import React from 'react'
import MLV from "../NAVBAR/MLV-LOGO.png"
import { auth, provider } from "../../firebase"
import { signInWithPopup, signOut } from 'firebase/auth'
import { useAuthState } from "react-firebase-hooks/auth"

const NavBar = () => {

    const signIn = () => {
        signInWithPopup(auth, provider)
            .then(resp => console.log("Signed In"))
            .catch(err => console.log(err))
    }

    const logOut = async()=>{
        await signOut(auth)
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
                            <img src={user.photoURL} alt="" />

                            <button onClick={logOut}>Sign Out</button>
                        </div>
                        : <button onClick={signIn}>Sign In</button>
                    }
                </div>
            </div>
        </nav>
    )
}

export default NavBar
