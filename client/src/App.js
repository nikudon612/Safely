import "./App.css";
import React, { useState, useEffect } from "react";
// import { Switch, Route, Redirect } from "react-router-dom";
import MapContainer from "./Components/MapContainer";
import NavBar from "./Components/NavBar";

function App() {
  //User state for login
  const [user, setUser] = useState("");

  //Fetch to find current user in session + setUser
  useEffect(() => {
    fetch("/me").then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user));
      }
    });
  }, []);

  //Handle function for login user state
  function handleLogin(user) {
    setUser(user);
  }

  return (
    <div className="App">
      <header className="App-header">
        <NavBar user={user} setUser={setUser} />
        <MapContainer />
      </header>
    </div>
  );
}

export default App;
