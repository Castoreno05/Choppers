import React from "react";
import styled from "styled-components";

export default function Calendar(props) {

  
  const handleClick = () => {
    // props.setDateSelected(date);
    console.log("Clicked");
  }

  return (
    <Container>
      <div onClick={handleClick}>My Div</div>
    </Container>
  )
}

const Container = styled.div``;

