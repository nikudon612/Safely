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
  const libraries = ["places"];
  const mapContainerStyle = {
    height: "89vh",
    width: "65%",
  };
  const center = {
    lat: 43.6532,
    lng: -79.3832,
  };
  //loading map and api key and libraries
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_API_KEY,
    libraries,
  });
  const [markers, setMarkers] = React.useState([]);
  //State for selecting markers
  const [selected, setSelected] = useState({});
  //State for geolocation position
  const [currentPosition, setCurrentPosition] = useState({});
  //State for fetching location data
  const [sites, setSites] = useState([]);
  //State for lat lng
  const [coordinates, setCoordinates] = useState({});

  //use to hold map info for panning
  const mapRef = React.useRef();

  const onMapLoad = React.useCallback((map) => {
    mapRef.current = map;
  }, []);

  //Setting state for info windows on markers
  const onSelect = (item) => {
    setSelected(item);
  };

  // useEffect(() => {
  //   fetch("/sites")
  //     .then((r) => r.json())
  //     .then((data) => setSites(data));
  // }, []);
  // console.log(sites);

  // error messages
  if (loadError) return "Error";
  if (!isLoaded) return "Loading...";

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
        {sites.map((item) => {
          return (
            <Marker
              key={item.name}
              // position={}
              hours={item.hours}
              onClick={() => onSelect(item)}
            />
          );
        })}
      </GoogleMap>
    </div>
  );
}

export default MapContainer;
