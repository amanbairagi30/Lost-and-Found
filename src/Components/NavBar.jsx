import React from 'react'
import MLV from "../Components/MLV-LOGO.png"

const NavBar = () => {
    return (
        <nav className="navbar">
            <div className="nav-content">
                <div className="logo">
                    <img src={MLV} alt="MLV TEXTILE COLLEGE" />
                    <div className="heading">MLV TEXTILE AND ENGINEERING COLLEGE BHILWARA(RAJASTHAN)</div>
                </div>
                {/* <div className="title">Lost and Found</div> */}
                <div className="auth-btn">
                    <button>Sign In</button>
                </div>
            </div>
        </nav>
    )
}

export default NavBar
