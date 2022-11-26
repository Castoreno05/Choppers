import React from "react";
import styled from "styled-components";

export default function Booking(props) {

  return (props.trigger) ? (
    <Container>
      <div>
        <button onClick={() => props.setPopup(false)}>X</button>
      </div>
    </Container>
  ) : "";
}

const Container = styled.div`
  width: 100%;
  display: flex;
  border: dotted 0.1rem black;
  height: 50vh;
`;
