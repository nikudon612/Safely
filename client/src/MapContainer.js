//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

import React, { useState } from "react";
import {
  GoogleMap,
  LoadScript,
  Marker,
  InfoWindow,
} from "@react-google-maps/api";

export const MapContainer = () => {
  const [selected, setSelected] = useState({});

  const onSelect = (item) => {
    setSelected(item);
  };

  const locations = [
    {
      // RAPID NYC 40.70059352680852, -73.91352288195964
      name: "RAPID NYC",
      location: {
        lat: 40.70059352680852,
        lng: -73.91352288195964,
      },
      hours: "M-F 8am - 6pm",
    },
    {
      // ORO LATINO 40.71730731019591, -73.99582819413783
      name: "ORO LATINO",
      location: {
        lat: 40.71730731019591,
        lng: -73.99582819413783,
      },
      hours: "M-F 8am - 6pm",
    },
    {
      // KETTL TEA 40.72675608568842, -73.99195461335529
      name: "KETTL TEA",
      location: {
        lat: 40.72675608568842,
        lng: -73.99195461335529,
      },
    },
    {
      name: "Location 4",
      location: {
        lat: 41.3797,
        lng: 2.1682,
      },
    },
    {
      name: "Location 5",
      location: {
        lat: 41.4055,
        lng: 2.1915,
      },
    },
  ];
  const mapStyles = {
    height: "100vh",
    width: "100%",
  };

  // DOWNTOWN MANHATTAN 40.72339745177747, -73.99893042815896
  const defaultCenter = {
    lat: 40.72339745177747,
    lng: -73.99893042815896,
  };

  return (
    <LoadScript googleMapsApiKey="AIzaSyBYWFT1yL5ChgLP0C9KlDuc9yzZKfZUzt8">
      <GoogleMap mapContainerStyle={mapStyles} zoom={13} center={defaultCenter}>
        {locations.map((item) => {
          return (
            <Marker
              key={item.name}
              position={item.location}
              hours={item.hours}
            />
          );
        })}
        {locations.map((item) => {
          return (
            <Marker
              key={item.name}
              position={item.location}
              onClick={() => onSelect(item)}
            />
          );
        })}
        {selected.location && (
          <InfoWindow
            position={selected.location}
            clickable={true}
            onCloseClick={() => setSelected({})}
          >
            <p>{selected.name}</p>
            <p>{selected.hours}</p>
          </InfoWindow>
        )}
      </GoogleMap>
    </LoadScript>
  );
};
export default MapContainer;
