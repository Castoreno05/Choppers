// import React, { useState } from "react";
// import {
//   Matthew,
//   Tank,
//   Germ,
//   Jimmy,
//   Victor,
//   Stan,
//   Dennis,
//   Mark,
// } from "../Data/EmployeeData";
// import Card from "../Components/Card";
// // import Booking from "../Booking";
// import styled from "styled-components";

// function Barbers() {
//   const data = { Matthew, Tank, Germ, Jimmy, Victor, Stan, Dennis, Mark };
//   const [active, setActive] = useState("barber-Tank");

//   return (
//     <Employee>
//       <h1>Barberz</h1>
//       <div className="barber-navigation">
//         <button onClick={() => setActive("barber-Tank")}>Tank</button>
//         <div className="spacer">|</div>
//         <button onClick={() => setActive("barber-Matthew")}>Matthew</button>
//         <div className="spacer">|</div>
//         <button onClick={() => setActive("barber-Germ")}>Germ</button>
//         <div className="spacer">|</div>
//         <button onClick={() => setActive("barber-Jimmy")}>Jimmy</button>
//         {/* <div className="spacer">|</div>
//         <button onClick={() => setActive("barber-Victor")}>Victor</button>
//         <div className="spacer">|</div>
//         <button onClick={() => setActive("barber-Stan")}>Stan</button>
//         <div className="spacer">|</div>
//         <button onClick={() => setActive("barber-Dennis")}>Dennis</button>
//         <div className="spacer">|</div>
//         <button onClick={() => setActive("barber-Mark")}>Mark</button> */}
//       </div>
//       {data && (
//         <div className="barber-wrapper">
//           {active === "barber-Tank" && (
//             <Card name={Tank.name} image={Tank.img} intro={Tank.intro} />
//           )}
//           {active === "barber-Matthew" && (
//             <Card
//               name={Matthew.name}
//               image={Matthew.img}
//               intro={Matthew.intro}
//             />
//           )}
//           {active === "barber-Germ" && (
//             <Card name={Germ.name} image={Germ.img} intro={Germ.intro} />
//           )}
//           {active === "barber-Jimmy" && (
//             <Card name={Jimmy.name} image={Jimmy.img} intro={Jimmy.intro} />
//           )}
//           {active === "barber-Victor" && (
//             <Card name={Victor.name} image={Victor.img} intro={Victor.intro} />
//           )}
//           {active === "barber-Stan" && (
//             <Card name={Stan.name} image={Stan.img} intro={Stan.intro} />
//           )}
//           {active === "barber-Dennis" && (
//             <Card name={Dennis.name} image={Dennis.img} intro={Dennis.intro} />
//           )}
//           {active === "barber-Mark" && (
//             <Card name={Mark.name} image={Mark.img} intro={Mark.intro} />
//           )}
//         </div>
//       )}
//     </Employee>
//   );
// }

// const Employee = styled.div`
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   padding: 1.5rem;
//   h1 {
//     padding: 1rem;
//     display: flex;
//     justify-content: center;
//   }
//   .barber-navigation {
//     display: flex;
//     flex-direction: row;
//     justify-content: space-around;
//     align-items: center;
//     height: 8vh;
//     padding: 1rem;
//     width: 100%;
//     button {
//       font-size: 32px;
//       background: none;
//       border: none;
//       border-bottom: 1px dotted black;
//       cursor: pointer;
//       // height: 50px;
//       // width: 100px;
//     }
//     .spacer {
//       font-size: 32px;
//     }
//   }
//   .barber-wrapper {
//     display: flex;
//     justify-content: center;
//     flex-direction: row;
//     align-items: center;
//     padding: 2rem;
//     .box {
//       background-color: grey;
//       border: solid 0.1rem;
//       height: 150px;
//       width: 150px;
//     }
//   }
// `;

// export default Barbers;
