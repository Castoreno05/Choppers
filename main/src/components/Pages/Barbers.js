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
  height: 100vh;
  background-color: darkblue;
  padding: 1.5rem;
  .barber-wrapper{
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    height: 50vh;
    background-color: green;
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


// Names are objects carrying the employees data
  // function printBarber({name}) {
  //   console.log(`Name is: ${name} I work at choppers`)
  // }
  // const [data,setData] = useState(EmployeeData);
  // console.log(data);
  // const [active, setActive] = useState({
  //   activeObject: null,
  //   objects: [{ id: 1 }, { id: 2 }, { id: 3 }],
  // });

  // function toggleBarber(index) {
  //   setActive({ ...active, activeObject: active.objects[index] });
  // };

  




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
