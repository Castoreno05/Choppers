import React from "react";
import styled from "styled-components";

export default function TimeSlots(props) {
    return <Container> 
      < span > {
        props.DaySlots
    } </span>
    </Container >;
}

const Container = styled.div `
display: flex;
justify-content: center;
height: 40px;
width: 65px;
border: solid 0.1rem black;
span{
  display: flex;
  margin-left: 0;
  align-items: center;
}
`;
