import React from "react";
import Footer from "./Components/FOOTER/Footer";
import Intro from "./Components/MAIN-INTRO/Intro";
import NavBar from "./Components/NAVBAR/NavBar";
import {useAuthState} from "react-firebase-hooks/auth"
import MainBox from "./Components/MAIN-BOX/MainBox";
// import { auth } from "../src/firebase"
import {auth} from "../src/firebase"


function App() {
  const [user] = useAuthState(auth);

  return (
    <>
      <div className="main-container">
        <NavBar />
        {!user ? <Intro /> : <MainBox />}
        <Footer />
      </div>
    </>
  );
}

export default App;
