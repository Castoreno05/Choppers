import React, { useMemo } from "react";
import { FaMapMarkerAlt, FaPhoneAlt, FaPaperPlane } from "react-icons/fa";
import { GoogleMap, useLoadScript, MarkerF } from "@react-google-maps/api";
import styled from "styled-components";

export default function Contact() {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: "AIzaSyDoFaIq_Ng6GgMFKgikd3rfiRZx6qgudsg",
  });

  if (!isLoaded)
    return (
      <div
        className="loading"
        style={{
          fontSize: "36px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "90vh",
        }}
      >
        Choppin'...
      </div>
    );

  return <Map />;
}

function Map() {
  const center = useMemo(() => ({ lat: 29.6891299, lng: -95.2203129 }), []);
  return (
    <Container>
      <div className="first-container">
        <div className="contact-form">
          <form>
            <div className="form-top">
              <h1>Contact Us</h1>
              <div className="top-container">
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
                  <h3>Email</h3>
                  <input
                    placeholder="Your Email Address"
                    type="email"
                    tabIndex="2"
                    required
                  />
                </div>
              </div>
            </div>
            <div className="form-bottom">
              <div className="bottom-container">
                <div className="top-side">
                  <h3>Subject</h3>
                  <input
                    placeholder="Your Subject"
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
              </div>
              <div className="send">
                <button name="submit" type="submit">
                  Send Message
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
      <div className="second-container">
        <section className="location-hours">
          <GoogleMap
            zoom={15}
            center={center}
            mapContainerClassName="map-container"
          >
            <MarkerF position={{ lat: 29.68921, lng: -95.21955 }} />
          </GoogleMap>
          <div className="contact-us">
            <section>
              <FaMapMarkerAlt />
              <p>
                <strong>Address</strong>: 1501 S Richey St, Pasadena, TX 77502
              </p>
            </section>
            <section>
              <FaPhoneAlt />
              <p>
                <strong>Phone</strong>: (713) 898-1217
              </p>
            </section>
            <section>
              <FaPaperPlane />
              <p>
                <strong>Email</strong>: choppers@gmail.com
              </p>
            </section>
          </div>
        </section>
      </div>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  padding: 0.8rem;
  justify-content: space-around;
  height: 90vh;
  .first-container {
    display: flex;
    justify-content: center;
    width: 50%;
    padding: 1rem;
    .contact-form {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      padding: 1.5rem;
      width: 85%;
      h1 {
        padding: 1rem;
        text-align: center;
        font-size: 32px;
      }
      form {
        background-color: #000100;
        border-radius: 10px;
        box-shadow: 0 0 10px #000100;
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 95%;
        color: whitesmoke;
        padding: 1.5rem;
        .form-top {
          width: 88%;
          display: flex;
          flex-direction: column;
          .top-container {
            display: flex;
            .left-side,
            .right-side {
              width: 50%;
              padding: 0.5rem;
              h3 {
                font-size: 24px;
                padding: 0.2rem;
              }
              input {
                padding: 0.2rem;
                border-radius: 5px;
                font-size: 14px;
                width: 100%;
                height: 40px;
                border: none;
              }
            }
          }
        }
        .form-bottom {
          width: 88%;
          display: flex;
          flex-direction: column;
          .bottom-container {
            display: flex;
            flex-direction: column;
            .top-side {
              padding: 0.5rem;
              h3 {
                font-size: 24px;
                padding: 0.2rem;
              }
              input {
                padding: 0.2rem;
                border-radius: 5px;
                font-size: 14px;
                width: 100%;
                height: 40px;
                border: none;
              }
            }
            .bottom-side {
              display: flex;
              flex-direction: column;
              padding: 0.5rem;
              h3 {
                font-size: 24px;
                padding: 0.2rem;
              }
              textarea {
                height: 25vh;
                border: none;
              }
            }
          }
          .send {
            padding: 0.5rem;
            button {
              padding: 0.1rem;
              font-size: 16px;
              cursor: pointer;
              width: 115px;
            }
          }
        }
      }
    }
  }
  .second-container {
    display: flex;
    width: 50%;
    padding: 1rem;
    .location-hours {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      width: 80%;
      .map-container {
        box-shadow: 0 0 15px #000100;
        height: 38vh;
        border-radius: 10px;
        width: 90%;
      }
      .contact-us {
        display: flex;
        flex-direction: column;
        justify-content: center;
        height: 20vh;
        section {
          display: flex;
          flex-direction: row;
          justify-content: center;
          height: 20%;
          gap: 0.5rem;
          width: 100%;
          font-size: 20px;
        }
      }
    }
  }

  @media screen and (max-width: 1150px) {
    .first-container {
      width: 55%;
      .contact-form {
        width: 100%;
        display: flex;
        form {
          .form-top {
            flex-direction: column;
            h1 {
              text-align: center;
              padding: 0.2rem;
              font-size: 22px !important;
            }
            .top-container {
              flex-direction: column;
              align-items: center;
              .left-side,
              .right-side {
                text-align: start;
                width: 95%;
              }
            }
          }
          .form-bottom {
            .bottom-container {
              align-items: center;
              .top-side {
                width: 100%;
                display: flex;
                align-items: center;
                flex-direction: column;
                h3 {
                  width: 95%;
                }
                input {
                  width: 95%;
                }
              }
              .bottom-side {
                width: 100%;
                align-items: center;
                display: flex;
                text-align: left;
                h3 {
                  width: 95%;
                }
                textarea {
                  width: 95%;
                  height: 20vh;
                }
              }
            }
            .send {
              display: flex;
              justify-content: center;
              align-items: center;
            }
          }
        }
      }
    }
    .second-container {
      width: 40%;
      .location-hours {
        width: 100%;
        .contact-us {
          section {
            font-size: 14px !important;
          }
        }
      }
    }
  }
  // Add media @ 875px
  @media screen and (max-width: 875px) {
    flex-direction: column;
    height: 100vh;
    align-items: center;
    .first-container {
      height: 50%;
      width: 100%;
      .contact-form {
        form {
          height: 40vh;
          .form-top {
            .top-container {
              justify-content: center;
              flex-direction: row;
              .left-side {
                width: 45%;
                h3 {
                  font-size: 18px;
                }
              }
              .right-side {
                width: 45%;
                h3 {
                  font-size: 18px;
                }
              }
            }
          }
          .form-bottom {
            .bottom-container {
              .top-side {
                width: 95%;
                h3 {
                  font-size: 18px;
                }
              }
              .bottom-side {
                width: 95%;
                h3 {
                  font-size: 18px;
                }
                textarea {
                  height: auto;
                }
              }
            }
            .send {
              justify-content: end;
              width: 95%;
            }
          }
        }
      }
    }
    .second-container {
      height: 50%;
      width: 100%;
      .location-hours {
        .map-container {
          width: 84%;
        }
        .contact-us {
          justify-content: space-around;
          padding: 1rem;
        }
      }
    }
  }
`;
