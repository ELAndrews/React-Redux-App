import React from "react";
import styled from "styled-components";

const HeaderContainer = styled.div`
  width: 100vw;
  height: 100px;
  background-color: #fff;
  position: absolute;
  padding-top: 20px;
  top: 0px;
  left: 0px;
  text-align: center;
`;

export default function Header() {
  return (
    <HeaderContainer>
      <h1>Latest Apple News Articles</h1>
    </HeaderContainer>
  );
}
