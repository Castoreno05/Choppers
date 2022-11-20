import React, { useState } from "react";
import { EmployeeData } from "../EmployeeData";
import styled from "styled-components";

function Barbers() {
  
  const [data,setData] = useState(EmployeeData);


  function toggleActive(index) {
    setData({...data, EmployeeData: data.id[index]})
    console.log(index)
  }

  return (
    <Employee>
      <div className="barber-navigation">
        {data.map((element, index) => {
          return (
            <div className={`barber-${element.name}`}>
              <h1>{element.name}</h1>
            </div>
          );
        })}
      </div>
      <div className="barber-wrapper">
        {data.map((element, index) => {
          return (
            <div
              key={index}
              className='box'
              onClick={() => toggleActive(index)}
            >{element.name}</div>
          );
        })}
      </div>
    </Employee>
  );
}

const Employee = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  height: 100vh;
  padding: 1.5rem;
  .barber-navigation{
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    height: 15vh;
    border: solid 0.2rem black;
  }
  .barber-wrapper{
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    height: 85vh;
    border: dotted 0.1rem black;
    .box {
      background-color: grey;
      border: solid 0.1rem;
      height: 150px;
      width: 150px;
    }
    .active{
      background-color: lightgreen;
      border: solid 0.1rem;
      height: 150px;
      width: 150px;
    }
    .inactive{
      display: none;
    }
  }
`;

export default Barbers;

