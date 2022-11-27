import React from "react";
import styled from "styled-components";

export default function Professional({ name, img }) {
  return (
    <Container>
      <div className="e-card">
        <div className="portrait">{img}</div>
        <h2>{name}</h2>
      </div>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 1rem;
  .e-card {
    border: dotted 0.1rem black;
    .portrait {
      height: 205px;
      width: 166px;
      img {
        border-radius: 5px;
        max-width: 100%;
        max-height: 100%;
      }
    }
    h2 {
      padding: 1rem;
    }
  }
`;
