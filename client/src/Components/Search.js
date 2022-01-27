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

// function Search({ panTo }) {
//   const PlacesAutocomplete = () =>
//     ({
//       ready,
//       value,
//       suggestions: { status, data },
//       setValue,
//       clearSuggestions,
//     } = usePlacesAutocomplete({
//       requestOptions: {
//         location: { lat: () => 43.6532, lng: () => -79.3832 },
//         radius: 100 * 1000,
//       },
//     }));

//   const handleSelect = async (address) => {
//     setValue(address, false);
//     clearSuggestions();
//   };

//   return (
//     <Combobox onSelect={handleSelect}>
//       <ComboboxInput
//         value={value}
//         onChange={(e) => {
//           setValue(e.target.value);
//         }}
//         disabled={!ready}
//         placeholder="Enter your city..."
//       />
//     </Combobox>
//   );
// }

// export default Search;
