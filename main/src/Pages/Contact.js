import React, { useMemo } from "react";
import { FaMapMarkerAlt, FaPhoneAlt, FaPaperPlane } from "react-icons/fa";
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
          <div className="contact-form">
            <h1>Contact Us</h1>
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
                  <h3>Email</h3>
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
                <div className="send">
                  <button name="submit" type="submit">
                    Send Message
                  </button>
                </div>
              </div>
            </form>
          </div>
        </section>
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
    justify-content: space-around;
    width: 50%;
    padding: 1rem;
    .contact-info {
      display: flex;
      flex-direction: column;
      color: #fff;
      justify-content: center;
      align-items: center;
      width: 100%;
      .contact-form {
        background-color: #000100;
        border-radius: 10px;
        box-shadow: 0 0 10px #000100;
        display: flex;
        flex-direction: column;
        padding: 1.5rem;f
        width: 90%;
        h1 {
          padding: 1rem;
          text-align: center;
          font-size: 32px;
        }
        form {
          display: flex;
          flex-direction: column;
          align-items: center;
          height: 60vh;
          .form-top {
            display: flex;
            width: 100%;
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
                font-size: 18px;
                width: 100%;
                height: 40px;
              }
            }
          }
          .form-bottom {
            width: 100%;
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
                font-size: 18px;
                width: 100%;
                height: 40px;
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
              }
            }
            .send {
              padding: 0.5rem;
              button {
                font-size: 16px;
                cursor: pointer;
                width: 115px;
              }
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
      justify-content: space-around;
      align-items: center;
      width: 100%;
      .map-container {
        box-shadow: 0 0 15px #000100;
        height: 30vh;
        border-radius: 10px;
        width: 90%;
      }
      .contact-us {
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        height: 33.5vh;
        width: 100%;
        section {
          display: flex;
          flex-direction: row;
          gap: 1rem;
          align-items: center;
          width: 100%;
          height: 100%;
        }
      }
    }
  }

  @media screen and (max-width: 890px) {
    .contact-form {
      h1 {
        font-size: 28px !important;
      }
      form {
        h3 {
          font-size: 20px !important;
        }
      }
    }
  }
  @media screen and (max-width: 700px) {
    .contact-form {
      h1 {
        font-size: 24px !important;
      }
      form {
        h3 {
          font-size: 16px !important;
        }
      }
    }
  }
  @media screen and (max-width: 565px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    .first-container {
      width: 100%;
    }
    .contact-form {
      form {
      }
    }
  }

  `;
// @media screen and (max-width: 780px) {
//   .first-container {
//     gap: 1rem;
//     flex-direction: column;
//     .contact-info {
//       gap: 0;
//       width: 100%;
//       height: 60vh;
//       form {
//         height: 38vh;
//       }
//     }
//     .map-container {
//       height: 50vh;
//       width: 100%;
//     }
//   }
// }

// h1 {
// 	padding: 1rem;
// 	text-align: center;
// }
// input {
//   width: 100% !important;
//   border-radius: 8px;
// }
// textarea {
//   width: 100% !important;
//   border-radius: 8px;
// }
// form {
//   margin: 10px 10px;
//   display: flex;
//   align-items: center;
//   flex-direction: column;
//   width: 100%;
//   gap: 1.5rem;
//   .form-top {
// 	display: flex;
// 	justify-content: space-between;
// 	align-items: center;
// 	flex-direction: row;
// 	gap: 1rem;
// 	width: 85%;
// 	.left-side {
// 	  width: 50%;
// 	  input {
// 		border: none;
// 		margin-top: 1rem;
// 	  }
// 	}
// 	.right-side {
// 	  width: 50%;
// 	  input {
// 		border: none;
// 		margin-top: 1rem;
// 	  }
// 	}
//   }
//   .form-bottom {
// 	display: flex;
// 	flex-direction: column;
// 	gap: 1rem;
// 	width: 85%;
// 	input {
// 	  margin-top: 1rem;
// 	  border: none;
// 	}
// 	textarea {
// 	  margin-top: 1rem;

// 	  height: 25vh;
// 	  border: none;
// 	}
// 	button {
// 	  cursor: pointer;
// 	  border-radius: 4px;
// 	  border: none;
// 	  height: 50px;
// 	  width: 100px;
// 	}
//   }
// }
