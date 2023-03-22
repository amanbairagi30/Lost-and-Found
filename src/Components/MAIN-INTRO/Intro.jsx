import React from 'react'
import Forget from "../MAIN-INTRO/Forget.svg"

const Intro = () => {
    return (
        <main className="main-intro">
            <div className="intro-content">
                <div className="intro-info">
                    <div className="heading">
                        Find what's <span>Lost</span> , reunite with what's <span>Found</span> !
                    </div>
                    <p className='sub-heading'>Join our <span>Community Now!</span></p>
                    <div className="info-button">
                        <button>Get Started</button>
                    </div>
                </div>

                <img src={Forget} alt="Some pic" />

            </div>

        </main>
    )
}

export default Intro
