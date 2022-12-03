import React, { useState } from "react";
import Professional from "../Components/Professional";
import Service from "../Components/Service";
import Calendar from "../Components/Calendar";
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

  return (
    <Container>
      <h1>{title}</h1>
      {calendarActive && (
        <div className="date-wrapper">
          <Calendar setDateSelected={setDateSelected} dates={next14Days} />
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
          <div className="time-reserve">
            <button>Choose a time</button>
          </div>
        </div>
      </div>
    </Container>
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
      padding: 2rem;
      .shopping-wrapper {
        border: solid 0.1rem black;
        border-radius: 6px;
        h2 {
          text-align: center;
          padding: 0.5rem;
        }
      }
      .time-reserve {
        display: flex;
        justify-content: center;
        padding: 1rem;
      }
    }
  }
`;

export default Appointments;
