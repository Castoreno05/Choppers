import React from "react";
import styled from "styled-components";

function BtnComponent(props) {
  return (
  <Button onClick={props.start}>Next Barber</Button>
  );
}

const Button = styled.div``;

export default BtnComponent;
