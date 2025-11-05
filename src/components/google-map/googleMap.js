"use client";
import React, { useState, useEffect } from "react";

import {
  GoogleMap,
  InfoWindowF,
  MarkerF,
  LoadScript,
} from "@react-google-maps/api";

function MyComponent() {
  const containerStyle = {
    width: "100%",
    maxWidth: "600px",
    height: "500px",
    display: "block",
    position: "relative",
    overflow: "hidden",
  };

  const position = {
    lat: 32.7073,
    lng: -97.5502,
  };

  const [selectedPlace, setSelectedPlace] = useState(null);
  const places = [
    {
      id: 0,
      name: "Fort Worth Office",
      address: "2821 S Hulen St, Fort Worth, TX 76109",
      lat: 32.71069,
      lng: -97.38585,
      link: "https://maps.app.goo.gl/RShyRCH7VmVCL5rv8",
    },
    {
      id: 1,
      name: "Granbury Office",
      address: "Granbury, TX 76048",
      lat: 32.44201,
      lng: -97.79567,
      link: "https://maps.app.goo.gl/PmtpEgnZ2SHESW836",
    },
  ];
  useEffect(() => {
    if (
      typeof window !== "undefined" &&
      !window.location.search.includes("refreshed")
    ) {
      window.history.replaceState(
        {},
        "",
        `${window.location.pathname}?refreshed=yes`
      );
      window.location.reload();
    }
  }, []);

  return (
    <LoadScript
      googleMapsApiKey={process.env.NEXT_PUBLIC_GOOGLE_API}
      loadingElement={<div>Loading...</div>}
      libraries={["marker"]}
    >
      <GoogleMap mapContainerStyle={containerStyle} center={position} zoom={9}>
        {places.map((place) => (
          <MarkerF
            key={place.id}
            position={{ lat: place.lat, lng: place.lng }}
            onClick={() => {
              place === selectedPlace
                ? setSelectedPlace(null)
                : setSelectedPlace(place);
            }}
          />
        ))}
        {selectedPlace && (
          <InfoWindowF
            position={{ lat: selectedPlace.lat, lng: selectedPlace.lng }}
            onCloseClick={() => setSelectedPlace(null)}
          >
            <div>
              <h5>{selectedPlace.name}</h5>
              <p>{selectedPlace.address}</p>
              <a target="_black" href={selectedPlace.link}>
                View on Google Maps
              </a>
            </div>
          </InfoWindowF>
        )}
      </GoogleMap>
    </LoadScript>
  );
}

export default React.memo(MyComponent);
