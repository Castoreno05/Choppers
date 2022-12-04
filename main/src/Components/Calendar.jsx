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
            onClick={(e) =>
              props.setDateSelected(`${data}`) & props.setTriggerButton(true)
            }
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
  gap: 2rem;
  animation: fadeIn .3s;
  padding: 0.5rem;
  .c-card{
    display: flex
    justify-content: center;
    align-items: center;
    border: solid 0.1rem black;
    max-width: 90%;
  }

  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
  @media screen and (max-width: 745px){
    display: grid;
    grid-template-columns: 33.3% 33.3% 33.3%;
    gap: 1rem;
  }
`;
