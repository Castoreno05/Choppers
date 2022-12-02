import React, { useState } from "react";
import Professional from "../Components/Professional";
import Service from "../Components/Service";
import Calendar from "../Components/Calendar";
import { ServiceData } from "../Data/ServiceData";
import { EmployeeData } from "../Data/EmployeeData"
import styled from "styled-components";

function Appointments() {

  const [proActive, setProActive] = useState(true);
  const [serviceActive, setServiceActive] = useState(false);
  const [calendarActive, setCalendarActive] = useState(false)
  // Shopping Cart State
  const [employeeName, setEmployeeName] = useState(undefined);
  const [employeeID, setEmployeeID] = useState(undefined);
  const [serviceName, setServiceName] = useState(undefined)
  const [serviceTime, setServiceTime] = useState(undefined)
  const [servicePrice, setServicePrice] = useState(undefined)
  const [dateSelected, setDateSelected] = useState(undefined);

  return (
    <Container>
      <h1>Heading</h1>
      {calendarActive && (
        <div className="date-wrapper">
          <Calendar setDateSelected={setDateSelected} />
        </div>
      )}
      <div className="shopping-container">
        {proActive && (
          <div className="professional-wrapper">
            {EmployeeData.map((data) => {
              return (
                <Professional
                  setProActive={setProActive}
                  key={data.id}
                  proName={data.name}
                  proID={data.eNumber}
                  proImage={data.img}
                  setEmployeeName={setEmployeeName}
                  setEmployeeID={setEmployeeID}
                  setServiceActive={setServiceActive}
                />
              );
            })}
          </div>
        )}
        {serviceActive && (
          <div className="service-wrapper">
            {ServiceData.map((data) => {
              return (
                <Service
                  setServiceActive={setServiceActive}
                  key={data.id}
                  serviceName={data.service}
                  serviceTime={data.time}
                  servicePrice={data.price}
                  setServiceName={setServiceName}
                  setServiceTime={setServiceTime}
                  setServicePrice={setServicePrice}
                  setCalendarActive={setCalendarActive}
                />
              )
            })}
          </div>
        )}
        <div className="shopping-cart">
          <h2>Your Order</h2>
          <div className="barber-selected">
            <p>Employee #: <strong>{employeeID}</strong></p>
            <p>Professional: <strong>{employeeName}</strong></p>
            <p>Service: <strong>{serviceName}</strong></p>
            <p>Service Price: <strong>${servicePrice}</strong></p>
            <p>Service Time: <strong>{serviceTime}</strong></p>
            <p>Day Selected: <strong>{dateSelected}</strong></p>
          </div>
          <div className="time-div">
            <button>Choose a time</button>
          </div>
        </div>
      </div>
    </Container >
  );
}

const Container = styled.div`
  display: flex;
  gap: 3rem;
  flex-direction: column;
  height: 100vh;
  padding: 1.5rem;
  h1 {
    text-align: center;
    padding: 0.6rem 2.5rem;
  }
  .shopping-container {
    display: grid;
    grid-template-columns: 70% 30%;
    .professional-wrapper,
    .service-wrapper {
      display: grid;
      grid-template-columns: 25% 25% 25% 25%;
    }
    .shopping-cart {
        display: flex;
        flex-direction: column;
        border: solid 0.1rem black;
        h2 {
          text-align: center;
          padding: 0.5rem;
        }
        .barber-selected {
          p {
            font-size: 22px;
            padding: 0.2rem;
          }
        }
        .time-div {
          display: flex;
          justify-content: center;
          padding: 1rem;
        }
      }
    
  }
`;

export default Appointments;
