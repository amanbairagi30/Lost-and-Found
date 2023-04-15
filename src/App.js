import React, { useEffect } from "react";
import Footer from "./Components/FOOTER/Footer";
import Intro from "./Components/MAIN-INTRO/Intro";
import NavBar from "./Components/NAVBAR/NavBar";
// import { useAuthState } from "react-firebase-hooks/auth"
import MainBox from "./Components/MAIN-BOX/MainBox";
// import { auth } from "../src/firebase"
// import { auth } from "../src/firebase"
import { useState } from 'react'
import LoadingBar from 'react-top-loading-bar'
import { Route, Routes } from "react-router-dom";
import MyListings from "./Components/Listings/MyListings";


function App() {
  // const [user] = useAuthState(auth);
  // const [progress, setProgress] = useState(0)
  const [loading, setLoading] = useState(false)


  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 1000)
  }, [])
  return (
    <>

      <div className="main-container">
        {
          loading ?
            <LoadingBar
              color='#813ef7'
              progress={100}
              height={8}
              // onLoaderFinished={() => setProgress(0)}
            /> : null
        }
        <NavBar />
        <Routes>
          <Route path="/" exact element={<Intro/>}/>
          <Route path="/main" exact element={<MainBox/>}/>
          <Route path="/listings" exact element={<MyListings/>}/>
        </Routes>
        {/* {!user ? <Intro /> : <MainBox />} */}
        <Footer />
      </div>
    </>
  );
}

export default App;
