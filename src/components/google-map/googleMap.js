import React, { useEffect, useState } from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
import getConfig from "next/config";

function MyComponent() {
  const [zoom, setZoom] = useState(11);
  const [containerStyle, setContainerStyle] = useState({
    width: "100%",
    maxWidth: "588px",
    height: "auto",
    overflow: "visible",
  });

  const center = {
    lat: 32.7073,
    lng: -97.3632,
  };

  const offices = [
    {
      id: 0,
      lat: 32.71069,
      lng: -97.38585,
    },
    {
      id: 1,
      lat: 32.44201,
      lng: -97.79567,
    },
  ];

  const {
    publicRuntimeConfig: { NEXT_PUBLIC_GOOGLE_API }, // Available both client and server side
  } = getConfig();
  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 768px)");
    const handleResize = () => {
      if (mediaQuery.matches) {
        setContainerStyle({
          ...containerStyle,
          height: "300px",
        });
        setZoom(8);
      } else {
        setContainerStyle({
          ...containerStyle,
          height: "581px",
        });
        setZoom(9);
      }
    };
    mediaQuery.addListener(handleResize);
    handleResize();
    return () => mediaQuery.removeListener(handleResize);
  }, []);

  return (
    <LoadScript googleMapsApiKey={NEXT_PUBLIC_GOOGLE_API}>
      <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={zoom}>
        {offices &&
          offices.map((office, idx) => (
            <Marker key={idx} position={{ lat: office.lat, lng: office.lng }} />
          ))}
      </GoogleMap>
    </LoadScript>
  );
}

export default React.memo(MyComponent);
