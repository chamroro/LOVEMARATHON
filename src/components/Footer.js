// import { useState, useEffect } from "react";

import styled from "styled-components";

function Footer() {
  const FooterComponent = styled.div`
    background-color: black;
    text-align: center;
    width: 100vw;
    height: 60px;
    padding-top: 18px;
    color: white;
    font-size: 11px;
  `;
  return (
    <FooterComponent>
      <p>© 2024 Love Manathon. All rights reserved.</p>
      <p>@2023_lovemarathon</p>
    </FooterComponent>
  );
}

export default Footer;
