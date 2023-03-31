import React, { useEffect, useRef, useState } from 'react'
import MLV from "../NAVBAR/MLV-LOGO.png"
import { auth, provider } from "../../firebase"
import { signInWithPopup, signOut } from 'firebase/auth'
import { useAuthState } from "react-firebase-hooks/auth"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { BsChevronDown } from "react-icons/bs";


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

    const Menus = ["My Listings", "Sign Out"]

    const [open, setOpen] = useState(false);

    const menuRef = useRef();
    const imgRef = useRef();

    // This will help to undisplay the dropdown wherever clicked on window
    window.addEventListener("click",(e)=>{
        if(e.target !== menuRef.current && e.target !== imgRef.current){
            setOpen(false);        
        }
    })

    const ToggleDropDown = (item)=>{
        setOpen(false);
        if(item === Menus[0]){
            console.log(Menus[0]);
        }
        else if(item === Menus[1]){
            console.log(Menus[1]);
            logOut()

        }
        // console.log(Menus[0]);
        
    }

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
                            <div ref={menuRef} className="boundary">
                                <img ref={imgRef} title="Click" onClick={() => setOpen(true)} src={user?.photoURL} alt="" />
                                <BsChevronDown onClick={()=>setOpen(true)} onMouseEnter={()=>setOpen(true)} />
                                {open && (
                                    <div className="drop-down">
                                        <ul>
                                            {
                                                Menus.map((item) => (
                                                    // <li onClick={()=>setOpen(true)} key={item}>{item}</li>
                                                    <li onClick={()=>ToggleDropDown(item)} key={item}>{item}</li>
                                                ))
                                            }
                                        </ul>
                                    </div>
                                )}
                            </div>
                            {/* <span>{user.photoURL}</span> */}

                            {/* <button onClick={logOut}>Sign Out</button> */}
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
