import "./App.css";
import React, { useState, useEffect } from "react";
import { Switch, Route } from "react-router-dom";
import MapContainer from "./Components/MapContainer";
import NavBar from "./Components/NavBar";
import Login from "./Components/Login";
import SignUp from "./Components/SignUp";

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
    // <h1>Hello, world</h1>
    <>
      <Switch>
        <Route path="/signup" user={user} setUser={setUser}>
          <SignUp />
        </Route>
        <Route path="/login" handleLogin={handleLogin}>
          <Login />
        </Route>
        <Route path="/">
          <div className="App">
            <header className="App-header">
              {/* <NavBar user={user} setUser={setUser} /> */}
            </header>
            <MapContainer />
            {/* <Login handleLogin={handleLogin} />
            <SignUp setUser={setUser} /> */}
          </div>
        </Route>
        {/* </Switch>
      <Switch> */}
      </Switch>
      {/* <main>
        <h1>Hello, world</h1>
      </main> */}
    </>
  );
}

export default App;
