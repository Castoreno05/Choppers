import React, { useState } from "react";
import { data } from "../EmployeeData";
import styled from "styled-components";

function Barbers() {
  const [barberList, updateBarberList] = useState(data);

  console.log(barberList, "barber_data");

  return (
    <Employee>
      <div className="barber-wrapper">
        <div className="barbers">
          {barberList.map((i) => {
            return <>{i.img}</>;
          })}
        </div>
        <button>Next Barber</button>
      </div>
    </Employee>
  );
}

const Employee = styled.div``;

export default Barbers;

// const Employees = styled.div`
// display: flex;
// flex-direction: column;
// overflow-x: auto;
// height: 100vh;
// .barbers{
//   margin-left: 1rem;
//   display: flex;
//   justify-content: space-around;
//   gap: 2rem;
//   width: 270rem;
//   .barberInfo h3{
//     padding: 2rem;
//   }
//   .barberInfo p{
//     padding: 2rem;
//     font-size: 1.25rem;
//     line-height: 2.25rem;
//     width: 60rem;
//   }
// }
// .barbers img{
//   border-radius: 0.8rem;
//   box-shadow: -11px 10px 5px 0px rgba(0,0,0,0.75);
//   flex-wrap: wrap;
//   width: 350px;
// }
// h1{
//   text-align: center;
//   font-size: 4rem;
//   padding: 1.5rem 1.5rem;
// }
// `;

// <Employees>
//   <div>
//     <h1>Barbers</h1>
//   </div>
//   <div className="barbers">
//     {data.map((item) => (
//       <>
//         <img src={item.img} alt={item.name} />
//         <div className="barberInfo" id={item.id}>
//           <h3>{item.name}</h3>
//           <p>{item.intro}</p>
//         </div>
//       </>
//     ))}
//   </div>
// </Employees>
