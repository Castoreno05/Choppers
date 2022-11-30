import React from "react";
import styled from "styled-components";

export default function Services(props) {
  return props.trigger ? (
    <Container>
      <div className="fade">1</div>
      <div className="fade">2</div>
      <div className="fade">3</div>
      <div className="fade">4</div>
    </Container>
  ) : (
    ""
  );
}

// Close div with button below
// <button onClick={() => props.setServices(false)}>Close Div</button>

const Container = styled.div`
  display: grid;
  grid-template-columns: 25% 25% 25% 25%;

  .fade {
    text-align: left;
    animation: fadeIn 2s;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  @keyframes fadeIn {
    from {
      opacity: 0;
    }

    to {
      opacity: 1;
    }
  }
`;
