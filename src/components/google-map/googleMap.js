import React, { useState, useMemo } from "react";

import {
  GoogleMap,
  InfoWindowF,
  MarkerF,
  LoadScript,
} from "@react-google-maps/api";

/** Stable reference + core `maps` lib only — avoids Loader "different options" with `marker`. */
const MAP_LIBRARIES = ["maps"];

function MyComponent() {
  const libraries = useMemo(() => MAP_LIBRARIES, []);
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
    lng: -97.38585,
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
  ];

  return (
    <LoadScript
      googleMapsApiKey={process.env.NEXT_PUBLIC_GOOGLE_API}
      loadingElement={<div>Loading...</div>}
      libraries={libraries}
    >
      <GoogleMap mapContainerStyle={containerStyle} center={position} zoom={12}>
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
