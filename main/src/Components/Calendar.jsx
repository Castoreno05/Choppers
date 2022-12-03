import React from "react";
import styled from "styled-components";

export default function Calendar(props) {
  return (
    <Container>
      {props.dates.map((data, index) => {
        return (
          <div
            className="c-card"
            key={index}
            onClick={(e) => props.setDateSelected(`${data}`)}
          >
            <p>{data}</p>
          </div>
        );
      })}
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  animation: fadeIn .3s;
  .c-card{
    display: flex
    justify-content: center;
    align-items: center;
    border: solid 0.1rem black;
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
