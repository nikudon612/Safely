//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

import React, { useState, useEffect } from "react";
import {
  GoogleMap,
  LoadScript,
  Marker,
  InfoWindow,
} from "@react-google-maps/api";
import Geocode from "react-geocode";
import Sites from "./Sites";

const MapContainer = ({
  handleReviewClick,
  handleAdd,
  handleReviews,
  reviewLists,
  siteLists,
  setSiteLists,
  handleClick,
}) => {
  //State for selecting markers
  const [selected, setSelected] = useState({});
  //State for geolocation position
  const [currentPosition, setCurrentPosition] = useState({});
  //State for fetching location data
  const [sites, setSites] = useState([]);
  //State for lat lng
  // const [position, setPosition] = useState([]);
  //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
  //GEOCODE TEST

  // console.log(process.env.REACT_APP_API_Key);

  Geocode.setApiKey("AIzaSyBYWFT1yL5ChgLP0C9KlDuc9yzZKfZUzt8");
  Geocode.setLanguage("en");
  Geocode.setLocationType("ROOFTOP");
  // GET ADDRESS FROM LAT LNG
  // Geocode.fromLatLng("48.8583701", "2.2922926").then(
  //   (response) => {
  //     const address = response.results[0].formatted_address;
  //     console.log(address);
  //   },
  //   (error) => {
  //     console.error(error);
  //   }
  // );

  //GET LAT LNG FROM ADDRESS
  // Geocode.fromAddress("315 Wyckoff Ave, Brooklyn, NY").then(
  //   (response) => {
  //     const { lat, lng } = response.results[0].geometry.location;
  //     console.log(lat, lng);
  //   },
  //   (error) => {
  //     console.error(error);
  //   }
  // );
  //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
  //Fetch for site data to create markers

  useEffect(() => {
    fetch("/sites")
      .then((r) => r.json())
      .then((data) => setSites(data));
  }, []);
  // console.log(sites);

  //Variable for geolocating position
  const success = (position) => {
    const currentPosition = {
      lat: position.coords.latitude,
      lng: position.coords.longitude,
    };
    setCurrentPosition(currentPosition);
  };

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(success);
  });

  //Variable for draggable markers
  const onMarkerDragEnd = (e) => {
    const lat = e.latLng.lat();
    const lng = e.latLng.lng();
    setCurrentPosition({ lat, lng });
  };

  //Setting state for info windows on markers
  const onSelect = (item) => {
    setSelected(item);
  };

  // LOCATIONS FOR GOOGLE MAPS PINS. NEED TO UPDATE THIS DATA W SEEDS
  // const locations = [
  //   {
  //     // RAPID NYC 40.70059352680852, -73.91352288195964
  //     name: "RAPID NYC",
  //     location: {
  //       lat: 40.70059352680852,
  //       lng: -73.91352288195964,
  //     },
  //     address: "380 Grove Street, Ridgewood, NY",
  //     hours: "M-F 8am - 6pm",
  //     comment: "this place is great!",
  //   },
  //   {
  //     // ORO LATINO 40.71730731019591, -73.99582819413783
  //     name: "ORO LATINO",
  //     location: {
  //       lat: 40.71730731019591,
  //       lng: -73.99582819413783,
  //     },
  //     address: "82 Bowery St, NYC, NY",
  //     hours: "M-F 8am - 6pm",
  //   },
  //   {
  //     // KETTL TEA 40.72675608568842, -73.99195461335529
  //     name: "KETTL TEA",
  //     location: {
  //       lat: 40.72675608568842,
  //       lng: -73.99195461335529,
  //     },
  //     address: "348 Bowery St, NYC, NY",
  //     hours: "M-F 8am - 6pm",
  //   },
  //   {
  //     //40.70459689268391, -73.91756436820366
  //     name: "Wyckoff Heights Medical Center",
  //     location: {
  //       lat: 40.70459689268391,
  //       lng: -73.91756436820366,
  //     },
  //     address: "374 Stockholm St, Ridgewood, NY",
  //     hours: "M-F 8am - 6pm",
  //   },
  //   {
  //     //40.700339128774, -73.90835490586235
  //     name: "Northwell Health-GoHealth",
  //     location: {
  //       lat: 40.700339128774,
  //       lng: -73.90835490586235,
  //     },
  //     address: "55-05 Myrtle Ave, Ridgewood, NY",
  //     hours: "M-F 8am - 6pm",
  //   },
  // ];
  const mapStyles = {
    height: "89vh",
    width: "65%",
  };

  // Make address equal to lat&lng
  //input: address which is a string
  // "315 Wyckoff Ave, Brooklyn, NY"
  //output: lat & lng which are floats inside of an object.
  // {lat: 40.7001958, lng: -73.9117555}

  function convertAddress(address) {
    address = { lat, lng };
    convertAddress("315 Wyckoff Ave, Brooklyn, NY");
  }

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
      <LoadScript
        googleMapsApiKey="AIzaSyBYWFT1yL5ChgLP0C9KlDuc9yzZKfZUzt8"
        // libraries="places"
      >
        <GoogleMap
          mapContainerStyle={mapStyles}
          zoom={13}
          center={currentPosition}
        >
          {currentPosition.lat ? (
            <Marker
              position={currentPosition}
              onDragEnd={(e) => onMarkerDragEnd(e)}
              draggable={true}
            />
          ) : null}
          {currentPosition.lat && <Marker position={currentPosition} />}

          {sites.map((item) => {
            return (
              <Marker
                key={item.name}
                position={convertAddress}
                hours={item.hours}
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
              <div>
                <p>{selected.name}</p>
                <p>{selected.address}</p>
                <p>{selected.hours}</p>
              </div>
            </InfoWindow>
          )}
        </GoogleMap>
      </LoadScript>
    </div>
  );
};
export default MapContainer;
