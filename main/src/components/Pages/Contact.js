import React from "react";
import { GoogleMap, useLoadScript } from "@react-google-maps/api";

export default function Contact() {
  const { isLoaded } = useLoadScript({
    key: "AIzaSyBsQ24w76-aS2LYQpjyDi_juSPp2SVu_uA",
  });

  if (!isLoaded) return <div>Loading...</div>;

  return <Map />;

}

function Map() {
  return (
    <GoogleMap
      zoom={10}
      center={{ lat: 29.68874, lng: -95.21963 }}
      style={{height:"100%", width: "100%"}}
    ></GoogleMap>
  );
}

