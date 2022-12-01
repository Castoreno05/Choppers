import React, { useState } from "react";
import Calendar from "react-calendar";
import styled from "styled-components";

export default function Date(props) {
  const [handleClick, setHandleClick] = useState(false);

  return props.dateActive ? (
    <Container>
      <Calendar handleClick={handleClick} />
      <button onClick={() => setHandleClick(null)}>Prop Button</button>
    </Container>
  ) : (
    ""
  );
}

const Container = styled.div`
  .react-calendar {
    .react-calendar__month-view__days {
      height: 60vh;
      button {
        padding: 0.3rem;
      }
    }
  }
`;
