import React, { useMemo } from 'react'
import { GoogleMap, useLoadScript, MarkerF } from "@react-google-maps/api";
import styled from "styled-components";

export default function Contact() {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: "AIzaSyDoFaIq_Ng6GgMFKgikd3rfiRZx6qgudsg",
  });

  if (!isLoaded) return <div>Loading...</div>

  return (
    <Map />
  )
}

function Map() {
  const center = useMemo(() => ({ lat: 29.6889168, lng: -95.2896565 }), [])
  return (
    <Container>
      <div className='first-container'>
        <section className='contact-info'>
          <h2>Contact Us</h2>
          <form className='contact-form'>
          </form>
        </section>
        <GoogleMap
          zoom={13}
          center={center}
          mapContainerClassName="map-container"
        >
          <MarkerF position={{ lat: 29.6889168, lng: -95.2896565 }} />
        </GoogleMap>
      </div>
      <section className='second-container'></section>
    </Container>
  )
}

const Container = styled.div`
display: flex;
flex-direction: column;
padding: 2rem;
justify-content: space-around;
gap: 1rem;
.first-container{
  display: flex;
  justify-content: space-around;
  width: 100%;
  .contact-info{
    h2{
      text-align: center;
      padding: 1rem;
    }
    border: dotted 0.1rem black;
    width: 35%;
    height: 85vh;
  }
  .map-container{
    border-radius: 20px;
    width: 60%;
    height: 85vh;
  }
}
.second-container{
  width: 100%;
  height: 25vh;
  border: dotted 0.1rem black;
}
@media screen and (max-width: 780px) {
  .first-container{
    gap: 1rem;
    flex-direction: column;
    .contact-info{
      height: 50vh;
      width: 100%;
    }
    .map-container{
      height: 50vh;
      width: 100%;
    }
  }
}
`;