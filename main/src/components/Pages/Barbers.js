import React from "react";
import { data } from "../EmployeeData";
import styled from "styled-components";

function Barbers() {
  return (
    <Employees>
      <div>
        <h1>Barbers</h1>
      </div>
      <div className="barbers">
        {data.map((item) => (
          <>
            <img src={item.img} alt={item.name} />
            <div className="barberInfo" id={item.id}>
              <h3>{item.name}</h3>
              <p>{item.intro}</p>
            </div>
          </>
        ))}
      </div>
    </Employees>
  )
}

const Employees = styled.div`
display: flex;
flex-direction: column;
overflow-x: auto;
height: 100vh;
.barbers{
  margin-left: 1rem;
  display: flex;
  justify-content: space-around;
  gap: 2rem;
  width: 270rem;
  .barberInfo{
    padding: 1rem 1rem;
  }
  .barberInfo p{
    font-size: 1.25rem;
    line-height: 2.25rem;
    width: 60rem;
  }
}
.barbers img{
  border-radius: 0.8rem;
  box-shadow: -11px 10px 5px 0px rgba(0,0,0,0.75);
  flex-wrap: wrap;
  width: 350px;
}
h1{
  position: relative;
  left: 40%;
  font-size: 4rem;
  padding: 1.5rem 1.5rem;
}
`;

export default Barbers;
