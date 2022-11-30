import React from "react";
import styled from "styled-components";

export default function Services(props) {
  return props.trigger ? (
    <Container>
      <div>1</div>
      <div>2</div>
      <div>3</div>
      <div>4</div>
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

  @keyframes fadeIn {
    from {
      opacity: 0;
    }

    to {
      opacity: 1;
    }
  }
`;

// h1 {
//   text-align: left;
//   transform: translate(0%);
//   animation: fadeIn 1s;
//   zindex: 1000;
// }
