import React from "react";
import styled from "styled-components";

export default function Professional(props) {
  const handleClick = (e) => {
    e.preventDefault();
    props.setTitle("CHOOSE A SERVICE");
    props.setEmployeeName(`${props.proName}`);
    props.setEmployeeID(`${props.proID}`);
    props.setServiceActive(true);
    props.setProActive(undefined);
  };

  return (
    <Container>
      <div className="e-card" id={props.proID} onClick={handleClick}>
        <div className="portrait">{props.proImage}</div>
        <h2>{props.proName}</h2>
      </div>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  justify-content: center;
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
