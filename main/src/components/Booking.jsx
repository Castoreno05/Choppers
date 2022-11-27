import React, { useState } from "react";
import Calendar from "react-calendar";
import 'react-calendar/dist/Calendar.css';
import styled from "styled-components";

export default function Booking(props) {
  const [date, setValue] = useState(new Date());

  const onChange = (date) => {
    setValue(date);
  };

  return props.trigger ? (
    <Container>
      <div className="closer">
        <button onClick={() => props.setPopup(false)}>X</button>
      </div>
      <div className="calendar-wrapper">
        <Calendar onChange={onChange} value={date} />
      </div>
    </Container>
  ) : (
    ""
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  border: dotted 0.1rem black;
  height: 50vh;
  .closer {
    display: flex;
    justify-content: end;
  }
`;
