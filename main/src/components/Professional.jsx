import React from "react";
import styled from "styled-components";

export default function Professional({
  name,
  img,
  setSelected,
  number,
  setValue,
  setName,
}) {
  function handleClick() {
    setSelected(true);
    setValue(`${number}`);
    setName(`${name}`);
  }

  return (
    <Container>
      <div className="e-card" id={number} onClick={handleClick}>
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
    box-shadow: 0 0 10px;
    border-radius: 5px;
    .portrait {
      height: 205px;
      width: 166px;
      padding: 1rem;
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
  .e-card:hover {
    cursor: pointer;
    background-color: black;
    h2 {
      color: white;
    }
  }
`;
