import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import styled from "styled-components";

export default function Booking(props) {
  const [date, setValue] = useState(new Date());

  const onChange = (date) => {
    setValue(date);
    console.log(date);
  };

  return props.trigger ? (
    <Container>
      <div className="booking-container">
        <div className="booking-info"></div>
        <div className="calendar-wrapper">
          <Calendar onChange={onChange} value={date} />
          <div className="closer">
            <button onClick={() => props.setPopup(false)}>X</button>
          </div>
        </div>
        <div className="time-slots"></div>
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
  background-color: rgba(0, 0, 0, 0.65);
  .booking-container {
    display: grid;
    grid-template-columns: 32% 36% 32%;
    width: 100%;
    align-items: center;
    background-color: black;
    .calendar-wrapper {
      padding: 1.5rem;
      height: 40vh;
      width: 35vw;
      display: flex;
      justify-content: center;
      .react-calendar {
        border-radius: 5px;
        width: auto;
      }
    }
  }
`;
