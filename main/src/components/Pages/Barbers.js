import React from "react";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
// import Row from "react-bootstrap/Row";
import Tank from "../../Images/RicardoSauceda.jpg";
// import Matt from "../../Images/MattSlattery.jpeg";
// import Germ from "../../Images/Germ.jpg";
import { AiFillLeftCircle, AiFillRightCircle } from "react-icons/ai";

function Barbers() {
  return (
    <div className="barbers">
      <Container fluid>
        <section id="tank" className="tankSection">
          <img src={Tank} alt="Richard Salcedo" className="imageOne" />
          <h1>Ricardo “Tank” Sauceda</h1>
          <div className="toggleDiv">
            <Button
              className="toggle"
              variant="none"
              style={{ background: "none", border: "none", height: "60px" }}
            >
              <AiFillLeftCircle id="leftArrow" />
            </Button>
            <Button
              className="toggle"
              variant="none"
              style={{ background: "none", border: "none", height: "60px" }}
            >
              <AiFillRightCircle id="rightArrow" />
            </Button>
          </div>
          <p>
            Born and raised on the Eastside of Houston, TX. He received his
            certification from the RS Institute Barber College, started chopping
            11 years ago in 2007, and is a TDLR certified class A barber. He
            became a barber when he wanted to do something his daughter that was
            on the way could be proud of! The things he likes most about being a
            barber are being able to interact with others, helping his clients
            feel more confident about themselves with a nice fresh cut, and
            being able to connect and help through conversations. Tank
            specializes in ALL cuts and hair types but his specialty are clean
            taper fades. In his spare time he is being a personal
            trainer/nutrition specialist at his gym that he owns, the Dungeon
            Elite Training Center. He also loves spending time with family and
            friends.
          </p>
        </section>
        {/* <section id="matt" className="mattSection">
          <img
            src={Matt}
            alt="Matt Slattery"
            className="imageTwo"
            style={{ width: "350px" }}
          />
          <h1>Matt Slattery</h1>
          <div className="toggleDiv">
            <Button
              className="toggle"
              variant="none"
              style={{ background: "none", border: "none", height: "60px" }}
            >
              <AiFillLeftCircle id="leftArrow" />
            </Button>
            <Button
              className="toggle"
              variant="none"
              style={{ background: "none", border: "none", height: "60px" }}
            >
              <AiFillRightCircle id="rightArrow" />
            </Button>
          </div>
          <p>
            Born and raised Houstonian that has been cutting
            hair at Chopper’s Barbershop since 2006. He earned his barber
            certification from Frazier’s Barber College and is a TDLR certified
            class A barber. Growing up he was always cutting his friends hair,
            so he thought he would go to school to do it full time! The things
            he likes most about being a barber is having a flexible schedule,
            interacting with clients, building friendships, and giving his
            customers a barbershop experience that makes them feel great and
            wanting to come back. In his free time, Matt enjoys spending time
            with his family, coaching his 3 son’s sports teams, and working out.
          </p>
        </section> */}
        {/* <section id="jeremy" className="jeremySection">
          <img
            src={Germ}
            alt="Jeremy Hernandez"
            className="imageThree"
            style={{ width: "350px" }}
          />
          <h1>Jeremy “Germ tha Barber” Hernandez</h1>
          <div className="toggleDiv">
            <Button
              className="toggle"
              variant="none"
              style={{ background: "none", border: "none", height: "60px" }}
            >
              <AiFillLeftCircle id="leftArrow" />
            </Button>
            <Button
              className="toggle"
              variant="none"
              style={{ background: "none", border: "none", height: "60px" }}
            >
              <AiFillRightCircle id="rightArrow" />
            </Button>
          </div>
          <p>
            Born and raised in Houston,
            TX and has been chopping for 7 years. He received his barber
            certification and hours fom the RS Intitute barber college, and is a
            TDLR certified class A barber. He always liked the lifestyle and
            look of a barber, and now that he is one, he aspires to be the
            barber that all his clients can count on! Growing up, he always
            liked how it felt after a fresh haircut, so now he is glad that he
            can provide that same feeling to others. Germ specializes in all
            hair types and cuts, but his signature styles and what he enjoys
            most are taper fades, bald fades and DESIGNS. In his free time, he
            enjoys spending time with his family.
          </p>
        </section> */}
      </Container>
    </div>
  );
}

export default Barbers;
