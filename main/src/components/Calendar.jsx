import React from "react";
import styled from "styled-components";
import { format } from "date-fns";

export default function Calendar(props) {
  const next14Days = [...Array(14).keys()].map((index) => {
    const date = new Date();
    date.setDate(date.getDate() + index);
    return format(date, "dd");
  });

  console.log(next14Days);

  const handleClick = () => {
    "Clicked";
  };

  return (
    <Container>
      <div onClick={handleClick}>My Div</div>
    </Container>
  );
}

const Container = styled.div``;
