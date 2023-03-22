import React from "react";
import Footer from "./Components/FOOTER/Footer";
import Intro from "./Components/MAIN-INTRO/Intro";
import NavBar from "./Components/NAVBAR/NavBar";

function App() {
  return (
    <>
      <div className="main-container">
        <NavBar />
        <Intro />
        <Footer />
      </div>
    </>
  );
}

export default App;
