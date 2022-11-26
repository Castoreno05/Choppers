import React from "react";
import styled from "styled-components";

export default function Booking(props) {
  return props.trigger ? (
    <Container>
      <div className="closer">
        <button onClick={() => props.setPopup(false)}>X</button>
      </div>
    </Container>
  ) : (
    ""
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  border: dotted 0.1rem black;
  height: 50vh;
  .closer{
    display: flex;
    justify-content: end;
  }
`;
