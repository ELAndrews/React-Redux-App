import React, { useState } from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { colorPicker } from "../state/actionCreators";
import toggleClassNames from "../hook/colorMode";
import useLocalStorage from "../hook/useLocalStorage";

const ButtonContainer = styled.div`
  position: absolute;
  right: 10px;
  top: 5px;
`;

export function Header({ color, colorPicker }) {
  const [pickedColor, setPickedColor] = useLocalStorage("color", "default");
  const handleClick = e => {
    const color = e.target.value;
    colorPicker(color);
    toggleClassNames(color);
    setPickedColor(color);
  };

  return (
    <div className="headerContainer">
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
    </div>
  );
}

function mapStateToProps(state) {
  return {
    color: state.color
  };
}

export default connect(mapStateToProps, { colorPicker })(Header);
