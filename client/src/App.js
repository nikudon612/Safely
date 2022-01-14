import "./App.css";
import React, { useState, useEffect } from "react";
import { Switch, Route } from "react-router-dom";
import MapContainer from "./Components/MapContainer";
import NavBar from "./Components/NavBar";
import NavLS from "./Components/NavLS";
import Login from "./Components/Login";
import SignUp from "./Components/SignUp";
// import Sisi from "./Components/Sisi";

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
    <>
      {user ? (
        <Switch>
          <Route path="/">
            <NavBar user={user} setUser={setUser} />
            <MapContainer />
          </Route>
        </Switch>
      ) : (
        <Switch>
          <Route path="/signup" user={user} setUser={setUser}>
            <NavLS />
            <SignUp />
          </Route>
          <Route path="/" handleLogin={handleLogin}>
            <NavLS />
            <Login />
          </Route>
          {/* <Route path="/">
            <div className="App">
              <header className="App-header"></header>
            </div> */}
          {/* </Route> */}
        </Switch>
      )}
    </>
  );
}

export default App;
