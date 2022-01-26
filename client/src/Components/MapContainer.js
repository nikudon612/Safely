//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

import React, { useState, useEffect } from "react";
import {
  GoogleMap,
  Marker,
  InfoWindow,
  useLoadScript,
} from "@react-google-maps/api";
import {
  Combobox,
  ComboboxInput,
  ComboboxPopover,
  ComboboxList,
  ComboboxOption,
} from "@reach/combobox";
import usePlacesAutocomplete from "use-places-autocomplete";
import Sites from "./Sites";

function MapContainer({
  handleReviewClick,
  handleAdd,
  handleReviews,
  reviewLists,
  siteLists,
  setSiteLists,
  handleClick,
}) {
  //new code from tut
  //libraries and styling
  const mapContainerStyle = {
    height: "89vh",
    width: "65%",
  };

  const center = {
    lat: 40.72061933905381,
    lng: -73.99466332551746,
  };

  const [markers, setMarkers] = React.useState([]);
  //State for selecting markers
  const [selected, setSelected] = useState({});
  //State for geolocation position
  const [currentPosition, setCurrentPosition] = useState({});
  //State for fetching location data
  const [sites, setSites] = useState([]);
  //State for lat lng
  const [coordinates, setCoordinates] = useState({});

  const onMapClick = React.useCallback((e) => {
    setMarkers((current) => [
      ...current,
      {
        lat: e.latLng.lat(),
        lng: e.latLng.lng(),
        time: new Date(),
      },
    ]);
  }, []);
  //use to hold map info for panning
  const mapRef = React.useRef();

  const onMapLoad = React.useCallback((map) => {
    mapRef.current = map;
  }, []);

  const panTo = React.useCallback(({ lat, lng }) => {
    mapRef.current.panTo({ lat, lng });
    mapRef.current.setZoom(14);
  }, []);

  //Setting state for info windows on markers
  const onSelect = (item) => {
    setSelected(item);
  };

  return (
    <div id="map">
      <div id="resultsContainer">
        <div id="searchbox">
          <div id="urLocation">Your Location</div>
          <input id="search" placeholder="Enter your City or Zip"></input>
        </div>
        <div id="resultsbox">
          <Sites
            handleReviewClick={handleReviewClick}
            handleAdd={handleAdd}
            handleReviews={handleReviews}
            reviewLists={reviewLists}
            siteLists={siteLists}
            setSiteLists={setSiteLists}
            handleClick={handleClick}
          />
        </div>
      </div>
      <GoogleMap
        mapContainerStyle={mapContainerStyle}
        zoom={13}
        center={center}
        onLoad={onMapLoad}
      >
        {markers.map((marker) => (
          <Marker
            key={`${marker.lat}-${marker.lng}`}
            position={{ lat: marker.lat, lng: marker.lng }}
            onClick={() => {
              setSelected(marker);
            }}
          />
        ))}
      </GoogleMap>
    </div>
  );
}

export default MapContainer;
