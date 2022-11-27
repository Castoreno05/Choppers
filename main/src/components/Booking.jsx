import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import styled from "styled-components";

export default function Booking(props) {
  const [date, setValue] = useState(new Date());

  const onChange = (date) => {
    setValue(date);
  };

  return props.trigger ? (
    <Container>
      <div className="calendar-wrapper">
        <Calendar onChange={onChange} value={date} />
        <div className="closer">
          <button onClick={() => props.setPopup(false)}>X</button>
        </div>
      </div>
    </Container>
  ) : (
    ""
  );
}

const Container = styled.div`
  display: flex;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  justify-content: center;
  align-items: center;
  .calendar-wrapper {
    height: 33vh;
    width: 35vw;
    display: flex;
    justify-content: center;
    .react-calendar {
      border: dotted 0.1rem black;
      width: auto;
    }
  }
`;
