import React from 'react'
import Forget from "../MAIN-INTRO/Forget.svg"
import { signInWithPopup} from 'firebase/auth'
import { auth, provider } from "../../firebase"
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link } from 'react-router-dom';


const Intro = () => {
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

    return (
        <main className="main-intro">
            <div className="intro-content">
                <div className="intro-info">
                    <div className="heading">
                        Find what's <span>Lost</span> , reunite with what's <span>Found</span> !
                    </div>
                    <p className='sub-heading'>Join our <span>Community Now!</span></p>
                    <div className="info-button">
                        <Link to={"main"}><button onClick={signIn}>Get Started</button></Link>
                    </div>
                </div>

                <img src={Forget} alt="Some pic" />

            </div>

        </main>
    )
}

export default Intro
