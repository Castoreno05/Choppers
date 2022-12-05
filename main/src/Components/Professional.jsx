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
  text-align: center;
  animation: fadeIn 0.5s;
  max-height: 90%;
  .e-card {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 0.35rem;
    align-items: center;
    box-shadow: 0 0 10px;
    border-radius: 5px;
    max-height: 100%;
    max-width: 85%;
    .portrait {
      max-height: 70%;
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
  
  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  @media screen and (max-width: 1175px) {
    .e-card {
      max-width: 75%;
    }
  }
  @media screen and (max-width: 865px){
    .e-card{
      max-width: 55%;
    }
  }
`;

