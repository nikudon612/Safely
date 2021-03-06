// import usePlacesAutocomplete, {
//   getGeocode,
//   getLatLng,
// } from "use-places-autocomplete";
// import {
//   Combobox,
//   ComboboxInput,
//   ComboboxPopover,
//   ComboboxList,
//   ComboboxOption,
// } from "@reach/combobox";
import { formatRelative } from "date-fns";
import React, { useState, useEffect } from "react";
import { GoogleMap, Marker, InfoWindow } from "@react-google-maps/api";
import Sites from "./Sites";
import Search from "./Search";

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

  const [markers, setMarkers] = useState([]);
  //State for selecting markers
  const [selected, setSelected] = useState(null);
  //State for geolocation position
  const [currentPosition, setCurrentPosition] = useState({});
  //State for fetching location data
  // const [sites, setSites] = useState([]);

  //Mapclick for setting coordinates of
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
  //Pans to location after search
  const panTo = React.useCallback(({ lat, lng }) => {
    mapRef.current.panTo({ lat, lng });
    mapRef.current.setZoom(14);
  }, []);

  //Setting state for info windows on markers

  const onSelect = (marker) => {
    setSelected(marker);

  const locations = [
    {
      // RAPID NYC 40.70059352680852, -73.91352288195964
      name: "RAPID NYC",
      location: {
        lat: 40.70059352680852,
        lng: -73.91352288195964,
      },
      address: "380 Grove Street, Ridgewood, NY",
      hours: "M-F 8am - 6pm",
      comment: "this place is great!",
    },
    {
      // ORO LATINO 40.71730731019591, -73.99582819413783
      name: "ORO LATINO",
      location: {
        lat: 40.71730731019591,
        lng: -73.99582819413783,
      },
      address: "82 Bowery St, NYC, NY",
      hours: "M-F 8am - 6pm",
    },
    {
      // KETTL TEA 40.72675608568842, -73.99195461335529
      name: "KETTL TEA",
      location: {
        lat: 40.72675608568842,
        lng: -73.99195461335529,
      },
      address: "348 Bowery St, NYC, NY",
      hours: "M-F 8am - 6pm",
    },
    {
      //40.70459689268391, -73.91756436820366
      name: "Wyckoff Heights Medical Center",
      location: {
        lat: 40.70459689268391,
        lng: -73.91756436820366,
      },
      address: "374 Stockholm St, Ridgewood, NY",
      hours: "M-F 8am - 6pm",
    },
    {
      //40.700339128774, -73.90835490586235
      name: "Northwell Health-GoHealth",
      location: {
        lat: 40.700339128774,
        lng: -73.90835490586235,
      },
      address: "55-05 Myrtle Ave, Ridgewood, NY",
      hours: "M-F 8am - 6pm",
    },
  ];

  return (
    <div id="map">
      <div id="resultsContainer">
        <div id="searchbox">
          <div id="urLocation">Your Location</div>
          {/* <input  placeholder="Enter your City..."></input> */}
          <Search id="search" panTo={panTo} />
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
        onClick={onMapClick}
      >
        {/* {locations.map((marker) => {
          return (
            <Marker
              key={marker.name}
              position={marker.location}
              hours={marker.hours}
              // onClick={() => onSelect(marker)}
            />
          );
        })} */}

        {markers.map((marker) => {
          return (
            <Marker
              key={marker.time.toISOString()}
              position={{ lat: marker.lat, lng: marker.lng }}
              onClick={() => onSelect(marker)}
            />
          );
        })}
        {selected ? (
          <InfoWindow
            position={{ lat: selected.lat, lng: selected.lng }}
            onCloseClick={() => {
              setSelected(null);
            }}
          >
            <div>
              <p>lat: {selected.lat}</p>
              <p>lng: {selected.lng}</p>
            </div>
          </InfoWindow>
        ) : null}
      </GoogleMap>
    </div>
  );
}

export default MapContainer;
