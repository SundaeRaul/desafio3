import React, { useState } from "react";
import Navbar from "../components/Home-Components/Navbar";
import Parallax from "../components/Home-Components/Parallax";
import Footer from "../components/Home-Components/Footer";
import BotaoTopo from "../components/Home-Components/BotaoTopo";
import "../styles/home-estilo.css";

function Home() {
  return (
    <div className="body">
      <Navbar />
      <Parallax />
      <Footer />
      <BotaoTopo />
    </div>
  );
}

export default Home;