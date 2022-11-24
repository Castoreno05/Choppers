import React, { useState } from "react";
import { Matthew, Tank, Germ } from "../EmployeeData";
import Card from "../Card";
import styled from "styled-components";

function Barbers() {
  const data = {Matthew, Tank, Germ};
  console.log(data);
  const [active, setActive] = useState("barber-Tank");

  return (
    <Employee>
      <h1>Barberz</h1>
      <div className="barber-navigation">
          <button onClick={() => setActive("barber-Tank")}>Tank</button>
          <div className="spacer">|</div>
          <button onClick={() => setActive("barber-Matthew")}>Matthew</button>
          <div className="spacer">|</div>
          <button onClick={() => setActive("barber-Germ")}>Germ</button>
      </div>
      {data && 

        <div className="barber-wrapper">
          {active === "barber-Tank" && <Card name={Tank.name} image={Tank.img} intro={Tank.intro}/>}
          {active === "barber-Matthew" && <Card name={Matthew.name} image={Matthew.img} intro={Matthew.intro}/>}
          {active === "barber-Germ" && <Card name={Germ.name} image={Germ.img} intro={Germ.intro}/>}
        </div>
      }
    </Employee>
  );
}

const Employee = styled.div`
  display: flex;
  gap: 1rem;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  // height: 100vh;
  padding: 1.5rem;
  h1{
    padding: 1rem;
    display: flex;
    justify-content: center;
  }
  .barber-navigation{
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    height: 8vh;
    padding: 1rem;
    width: 100%;
    button{
      font-size: 32px;
      background: none;
      border: none;
      border-bottom: 1px dotted black;
      cursor: pointer;
      // height: 50px;
      // width: 100px;
    }
    .spacer{
      font-size: 32px;
    }
  }
  .barber-wrapper{
    display: flex;
    justify-content: center;
    flex-direction: row;
    align-items: center;
    padding: 2rem;
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

