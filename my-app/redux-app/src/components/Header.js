import React from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { colorPicker } from "../state/actionCreators";

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

const ButtonContainer = styled.div`
  position: absolute;
  right: 10px;
  top: 5px;
`;

export function Header({ color, colorPicker }) {
  const handleClick = e => {
    const color = e.target.value;
    colorPicker(color);
  };

  return (
    <HeaderContainer>
      <h1>Latest Apple News Articles</h1>
      <ButtonContainer>
        <span>Color Scheme: </span>
        <button value="default" onClick={handleClick}>
          Neutral
        </button>
        <button value="dark" onClick={handleClick}>
          Dark
        </button>
        <button value="multi" onClick={handleClick}>
          Lets Get Crazy
        </button>
      </ButtonContainer>
    </HeaderContainer>
  );
}

function mapStateToProps(state) {
  return {
    color: state.color
  };
}

export default connect(mapStateToProps, { colorPicker })(Header);
