import React, { useState } from "react";
import { Professionals } from "../Data/EmployeeData";
import { Services } from "../Data/ServiceData";
import Professional from "../Components/Professional";
import Service from "../Components/Service";
import styled from "styled-components";

function Appointments() {
  const [active, setActive] = useState(true);

  // State for Shopping Cart
  // const [employeeName, setEmployeeName] = useState(undefined);
  // const [employeeID, setEmployeeID] = useState(undefined);
  // const [serviceName, setServiceName] = useState(undefined);
  // const [servicePrice, setServicePrice] = useState(undefined);

  return (
    <Container>
      <h1>Heading</h1>
      <div className="shopping-container">
        {active ? (
          <div className="professional-wrapper">
            {Professionals.map((data) => {
              return (
                <Professional
                  key={data.id}
                  proName={data.name}
                  proID={data.eNumber}
                  proImage={data.img}
                  setActive={setActive}
                />
              );
            })}
          </div>
        ) : (
          <div className="service-wrapper">
            {Services.map((items) => {
              return (
                <Service
                  key={items.id}
                  serviceName={items.service}
                  serviceTime={items.time}
                  servicePrice={items.price}
                  setActive={setActive}
                />
              );
            })}
          </div>
        )}
        <div className="items-selected">
          <div className="shopping-cart">
            <h2>Your Order</h2>
            <div className="barber-selected">
              <p>{/* Employee #: <strong>{employeeID}</strong> */}</p>
              <p>{/* Professional: <strong>{employeeName}</strong> */}</p>
              <p>{/* Service: <strong>{serviceName}</strong> */}</p>
              <p>{/* Service Price: <strong>${servicePrice}</strong> */}</p>
            </div>
            <div className="time-div">
              <button>Choose a time</button>
            </div>
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
    .items-selected {
      padding: 1rem;
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
  }
`;

export default Appointments;

/* {active ? (
          <div className="professional-wrapper">
            {Professionals.map((data) => (
              <Professional
                key={data.id}
                proName={data.name}
                proID={data.eNumber}
                proImage={data.img}
                setEmployeeID={setEmployeeID}
                setEmployeeName={setEmployeeName}
                setActive={setActive}
              />
            ))}
          </div>
        ) : (
          <div className="service-wrapper">
            {Services.map((data) => (
              <Service
                key={data.id}
                serviceName={data.service}
                serviceTime={data.time}
                servicePrice={data.price}
                setServiceName={setServiceName}
                setServicePrice={setServicePrice}
                setActive={setActive}
              />
            ))}
          </div>
        )} */

/* {date ? <Date /> : <></>} */

// import Date from "../Components/Date";
// State for Date
//  const [dateActive, setDateActive] = useState(false);
/* <Date dateActive={dateActive} /> */

// State for Services
// const [servicesActive, setServicesActive] = useState(false);
// const [serviceName, setServiceName] = useState(undefined);
/* <Services
  clicker={servicesActive}
  setServicesActive={setServicesActive}
  serviceName={serviceName}
  setServiceName={setServiceName}
  setDateActive={setDateActive}
/>; */
