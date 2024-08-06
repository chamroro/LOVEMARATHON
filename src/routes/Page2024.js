// import { useState, useEffect } from "react";

import React from "react";
import styled from "styled-components";
import ThisYear from "../components/ThisYear";
import Navbar from "../components/Navbar2";
import Footer from "../components/Footer";
function Page2024() {
  const Page2024 = styled.div`
    width: 100%;
    height: 100%;
    background-color: black;
  `;

  return (
    <Page2024>
      <Navbar />
      <ThisYear />
      <Footer />
    </Page2024>
  );
}

export default Page2024;
