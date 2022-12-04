import React, { useState } from "react";
import Calendar from "../Components/Calendar";
import Professional from "../Components/Professional";
import Service from "../Components/Service";
import TimeSlots from "../Components/TimeSlots";
import ShoppingCart from "../Components/ShoppingCart";
import { ServiceData } from "../Data/ServiceData";
import { EmployeeData } from "../Data/EmployeeData";
import { format } from "date-fns";
import styled from "styled-components";

function Appointments() {
  // Title State
  const [title, setTitle] = useState("CHOOSE A PROFESSIONAL");
  // Components State
  const [proActive, setProActive] = useState(true);
  const [serviceActive, setServiceActive] = useState(false);
  const [calendarActive, setCalendarActive] = useState(false);
  const [timeSlotsActive, setTimeSlotsActive] = useState(false);
  const [triggerButton, setTriggerButton] = useState(false);

  /*******************SHOPPING CART STATE*********************/
  const [employeeName, setEmployeeName] = useState(undefined);
  const [employeeID, setEmployeeID] = useState(undefined);
  const [serviceName, setServiceName] = useState(undefined);
  const [serviceTime, setServiceTime] = useState(undefined);
  const [servicePrice, setServicePrice] = useState(undefined);
  const [dateSelected, setDateSelected] = useState(undefined);
  /***********************************************************/

  /******************DATES FOR CALENDAR***********************/
  const next14Days = [...Array(14).keys()].map((index) => {
    const date = new Date();
    date.setDate(date.getDate() + index);
    return format(date, "dd");
  });
  /***********************************************************/

  const timeSlots = () => {
    console.log("Clicked");
    setServiceActive(undefined);
    setCalendarActive(undefined);
    setTriggerButton(undefined);
    setTimeSlotsActive(true);
  };

  return (
    <Container>
      <h1>{title}</h1>
      {calendarActive && (
        <div className="date-wrapper">
          <Calendar
            setDateSelected={setDateSelected}
            dates={next14Days}
            setTriggerButton={setTriggerButton}
          />
        </div>
      )}
      <TheContainer>
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
                    setTitle={setTitle}
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
                    setTitle={setTitle}
                    setServiceName={setServiceName}
                    setServiceTime={setServiceTime}
                    setServicePrice={setServicePrice}
                    setCalendarActive={setCalendarActive}
                  />
                );
              })}
            </div>
          )}
          {timeSlotsActive && (
            <div className="time-wrapper">
              <TimeSlots />
            </div>
          )}
        </div>
        <div className="shopping-cart">
          <div className="shopping-wrapper">
            <h2>Your Order</h2>
            <ShoppingCart
              employeeName={employeeName}
              employeeID={employeeID}
              serviceName={serviceName}
              serviceTime={serviceTime}
              servicePrice={servicePrice}
              dateSelected={dateSelected}
            />
          </div>
          {triggerButton && (
            <div className="time-reserve">
              <button onClick={timeSlots}>Choose a time</button>
            </div>
          )}
        </div>
      </TheContainer>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 90vh;
  padding: 1.5rem;
  gap: 3rem;
  h1 {
    text-align: center;
  }

  @media screen and (max-width: 745px) {
    gap: 1rem;
    align-items: normal !important;
  }
`;

const TheContainer = styled.div`
  display: grid;
  overflow: hidden;
  grid-template-columns: 70% 30%;
  width: 95%;
  padding: 1rem;
  .shopping-container {
    overflow-y: scroll;
    .professional-wrapper {
      display: grid;
      grid-template-columns: 33.3% 33.3% 33.3%;
      padding: 1.5rem 2rem;
    }
    .service-wrapper {
      display: grid;
      grid-template-columns: 25% 25% 25% 25%;
      padding: 2rem 2rem;
    }
  }
  .shopping-cart {
    .shopping-wrapper {
      padding: 1.5rem 2rem;
      h2 {
        padding: 0.2rem;
        text-align: center;
      }
    }
  }

  @media screen and (max-width: 1175px) {
    .shopping-container {
      .professional-wrapper {
        justify-content: center;
        grid-template-columns: 50% 50%;
      }
    }
  }
  @media screen and (max-width: 865px) {
    .shopping-container {
      .professional-wrapper {
        grid-template-columns: 100%;
      }
    }
  }
`;

export default Appointments;
