import React, { useMemo } from "react";
import * as FaIcons from "react-icons/fa";
import { GoogleMap, useLoadScript, MarkerF } from "@react-google-maps/api";
import styled from "styled-components";

export default function Contact() {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: "AIzaSyDoFaIq_Ng6GgMFKgikd3rfiRZx6qgudsg",
  });

  if (!isLoaded) return <div>Loading...</div>;

  return <Map />;
}

function Map() {
  const center = useMemo(() => ({ lat: 29.6891299, lng: -95.2203129 }), []);
  return (
    <Container>
      <div className="first-container">
        <section className="contact-info">
          <h1>Contact Us</h1>
          <div className="contact-form">
            <form>
              <div className="form-top">
                <div className="left-side">
                  <h3>Full Name</h3>
                  <input
                    placeholder="Your name"
                    type="text"
                    tabIndex="1"
                    required
                  />
                </div>
                <div className="right-side">
                  <h3>Email Address</h3>
                  <input
                    placeholder="Your Email Address"
                    type="email"
                    tabIndex="2"
                    required
                  />
                </div>
              </div>
              <div className="form-bottom">
                <div className="top-side">
                  <h3>Subject</h3>
                  <input
                    placeholder="Your Email Address"
                    type="email"
                    tabIndex="2"
                    required
                  />
                </div>
                <div className="bottom-side">
                  <h3>Message</h3>
                  <textarea
                    placeholder="Type your message here...."
                    tabIndex="3"
                    required
                  ></textarea>
                </div>
                <button name="submit" type="submit">
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </section>
        <GoogleMap
          zoom={15}
          center={center}
          mapContainerClassName="map-container"
        >
          <MarkerF position={{ lat: 29.68921, lng: -95.21955 }} />
        </GoogleMap>
      </div>
      <section className="second-container">
        <div>
          <div className="icon-div">
            <FaIcons.FaMapMarkerAlt />
          </div>
          <p>
            <strong>Address</strong>: 1501 S Richey St, Pasadena, TX 77502
          </p>
        </div>
        <div>
          <div className="icon-div">
            <FaIcons.FaPhoneAlt />
          </div>
          <p>
            <strong>Phone</strong>: (713) 898-1217
          </p>
        </div>
        <div>
          <div className="icon-div">
            <FaIcons.FaPaperPlane />
          </div>
          <p>
            <strong>Email</strong>: choppers@gmail.com
          </p>
        </div>
        <div>
          <div className="icon-div">
            <FaIcons.FaGlobeAmericas />
          </div>
          <p>
            <strong>Website</strong>: www.choppers-barbershop.com
          </p>
        </div>
      </section>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2rem;
  justify-content: space-around;
  gap: 1rem;
  .first-container {
    display: flex;
    justify-content: space-around;
    width: 100%;
    .contact-info {
      display: flex;
      border-radius: 20px;
      flex-direction: column;
      color: #fff;
      gap: 1.5rem;
      align-items: center;
      background-color: #07252d;
      width: 55%;
      height: 85vh;
      h1 {
        font-size: 42px;
        padding: 1.5rem;
      }
      .contact-form {
        display: flex;
        padding: 1.5rem;
        width: 95%;
        input {
          width: 100% !important;
          border-radius: 8px;
        }
        textarea {
          width: 100% !important;
          border-radius: 8px;
        }
        form {
          margin: 10px 10px;
          display: flex;
          align-items: center;
          flex-direction: column;
          width: 100%;
          gap: 1.5rem;
          .form-top {
            display: flex;
            justify-content: space-between;
            align-items: center;
            flex-direction: row;
            gap: 1rem;
            width: 85%;
            .left-side {
              width: 50%;
              input {
                border: none;
                margin-top: 1rem;
              }
            }
            .right-side {
              width: 50%;
              input {
                border: none;
                margin-top: 1rem;
              }
            }
          }
          .form-bottom {
            display: flex;
            flex-direction: column;
            gap: 1rem;
            width: 85%;
            input {
              margin-top: 1rem;
              border: none;
            }
            textarea {
              margin-top: 1rem;

              height: 25vh;
              border: none;
            }
            button {
              cursor: pointer;
              border-radius: 4px;
              border: none;
              height: 50px;
              width: 100px;
            }
          }
        }
      }
    }
    .map-container {
      border-radius: 20px;
      width: 40%;
      height: 85vh;
    }
  }
  .second-container {
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 100%;
    height: 25vh;
    color: #fff;
    text-align: center;
    .icon-div {
      gap: 1rem;
      display: flex;
      justify-content: center;
      margin: auto;
      background-color: #00308f;
      height: 50px;
      width: 50px;
      align-items: center;
      border-radius: 15px;
      svg {
        height: 22px;
        width: 22px;
        color: white;
      }
    }
    p {
      margin-top: 1rem;
    }
  }
  @media screen and (max-width: 780px) {
    .first-container {
      gap: 1rem;
      flex-direction: column;
      .contact-info {
        gap: 0;
        width: 100%;
        form {
          height: 38vh;
        }
      }
      .map-container {
        height: 50vh;
        width: 100%;
      }
    }
  }
`;
