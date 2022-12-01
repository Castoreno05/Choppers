import React from "react";
import styled from "styled-components";

function Home() {
  return (
    <Container>
      <h1>Home</h1>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  height: 100vh;
  padding: 1.5rem;
  justify-content: center;
`;

export default Home;
