// import { useState, useEffect } from "react";

import React from "react";
import styled from "styled-components";
import Soon from "../components/Soon";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
function CommunityPage() {
  const CommunityPage = styled.div`
    width: 100%;
    height: 100%;
    background-color: black;
  `;

  return (
    <CommunityPage>
      <Navbar />
      <Soon />
      <Footer />
    </CommunityPage>
  );
}

export default CommunityPage;
