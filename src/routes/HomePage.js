// import { useState, useEffect } from "react";

import Home from "../components/Home";
import React, { useEffect } from "react";
import styled from "styled-components";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
function HomePage() {
  const HomePage = styled.div`
    width: 100%;
    height: 100%;
    background-color: black;
  `;

  return (
    <HomePage>
      <Navbar />
      <Home />
      <Footer />
    </HomePage>
  );
}

export default HomePage;
