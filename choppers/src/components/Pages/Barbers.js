import React from 'react';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Tank from '../../Images/Tank.jpeg'

function Barbers() {
  return (
    <div className='barbers'>
      <Container fluid className='tankContainer'>
        <section id='tank'>
          <img src={Tank}/>
          <h1>Tank</h1>
          <p>Lorem ipsum dolor sit amet, in sumo utinam nam, ut possim suscipit vim, cum in quaeque tibique. Vel ex semper delenit aliquando, sed discere omittam nominavi ad. Diam feugait scribentur an mea, pro id detraxit definiebas. Eirmod maluisset dissentiunt at sit. At mutat falli prodesset vim. Eu quem putent expetenda has, ceteros consequat mel eu. Prompta platonem delicata te duo, ei sit magna percipit dignissim.</p>
        </section>
      </Container>
    </div>
  )
}

export default Barbers