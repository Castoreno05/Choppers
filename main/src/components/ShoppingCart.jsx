import React from "react";
import styled from "styled-components";

export default function ShoppingCart(props) {
  return (
    <Container>
      <p>
        Employee #: <strong>{props.employeeID}</strong>
      </p>
      <p>
        Professional: <strong>{props.employeeName}</strong>
      </p>
      <p>
        Service: <strong>{props.serviceName}</strong>
      </p>
      <p>
        Service Price: <strong>${props.servicePrice}</strong>
      </p>
      <p>
        Service Time: <strong>{props.serviceTime}</strong>
      </p>
      <p>
        Day Selected: <strong>{props.dateSelected}</strong>
      </p>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 1rem;
  gap: 1rem;
  p {
    font-size: 24px;
  }
`;
