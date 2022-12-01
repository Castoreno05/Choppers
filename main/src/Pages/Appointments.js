import React, { useState } from "react";
import Team from "../Components/Team";
import Services from "../Components/Services";
import Date from "../Components/Date";
import styled from "styled-components";

function Appointments() {
  const [title, setTitle] = useState("Choose a Professional");
  // State for Team
  const [teamActive, setTeamActive] = useState(true);
  // State for Services
  const [servicesActive, setServicesActive] = useState(false);
  // State for Date
  const [dateActive, setDateActive] = useState(false);
  // State for Shopping Cart
  const [employeeName, setEmployeeName] = useState(null);
  const [employeeID, setEmployeeID] = useState(null);
  const [serviceName, setServiceName] = useState(null);

  return (
    <Container>
      <h1>{title}</h1>
      <div className="appointment-wrapper">
        <Team
          trigger={teamActive}
          setTeamActive={setTeamActive}
          employeeName={employeeName}
          employeeID={employeeID}
          setEmployeeName={setEmployeeName}
          setEmployeeID={setEmployeeID}
          setServicesActive={setServicesActive}
          setTitle={setTitle}
        />
        <Services
          clicker={servicesActive}
          setServicesActive={setServicesActive}
          serviceName={serviceName}
          setServiceName={setServiceName}
          setDateActive={setDateActive}
          setTitle={setTitle}
        />
        <Date dateActive={dateActive} />
        <div className="items-selected">
          <div className="shopping-cart">
            <h2>Your Order</h2>
            <div className="barber-selected">
              <p>
                Employee #: <strong>{employeeID}</strong>
              </p>
              <p>
                Professional: <strong>{employeeName}</strong>
              </p>
              <p>
                Service: <strong>{serviceName}</strong>
              </p>
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
  .appointment-wrapper {
    display: grid;
    grid-template-columns: 70% 30%;
    overflow: hidden;
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
