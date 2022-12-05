import React from "react";
import styled from "styled-components";

export default function Calendar(props) {
    return (<Container> {
        props.dates.map((data, index) => {
            return (<div className="c-card"
                key={index}
                onClick={
                    (e) => props.setDateSelected(`${data}`) & props.setTriggerButton(true)
            }>
                <p> {data}</p>
            </div>);
        })
    } </Container>);
}

const Container = styled.div `
  display: grid;
  grid-template-columns: 14% 14% 14% 14% 14% 10% 14%;
  gap: 1.2rem;
  align-items: center;
  justify-content: center;
  animation: fadeIn .3s;
  padding: 0.5rem;
  // border: solid 0.1rem black;
  .c-card{
    display: flex
    justify-content: center;
    align-items: center;
    max-width: 65%;
    cursor: pointer;
    p{
      text-align: center;
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
  @media screen and (max-width: 965px){
    gap: .5rem;
  }
`;
