import "./App.css";
import React, { useState, useEffect } from "react";
import { Switch, Route } from "react-router-dom";
import NavBar from "./Components/NavBar";
import NavLS from "./Components/NavLS";
import Login from "./Components/Login";
import SignUp from "./Components/SignUp";
import Results from "./Components/Results";
import Sites from "./Components/Sites";
import Tests from "./Components/Tests";
import Account from "./Components/Account";
import HomePage from "./Components/HomePage";
import Reviews from "./Components/Review";

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
          {/* <Route exact path="/reviews/:id">
            <NavBar user={user} setUser={setUser} />
            <Reviews user={user} />
          </Route>
          <Route exact path="/reviews">
            <NavBar user={user} setUser={setUser} />
            <Reviews user={user} />
          </Route> */}
          <Route exact path="/homepage">
            <NavBar user={user} setUser={setUser} />
            <HomePage user={user} />
          </Route>
          <Route exact path="/account">
            <NavBar user={user} setUser={setUser} />
            <Account user={user} />
          </Route>
          <Route exact path="/tests">
            <NavBar user={user} setUser={setUser} />
            <Tests />
          </Route>
          <Route exact path="/sites">
            <NavBar user={user} setUser={setUser} />
            <Sites user={user} />
          </Route>
          <Route path="/">
            <NavBar user={user} setUser={setUser} />
            <div id="homepageContainer">
              <Results user={user} />
            </div>
          </Route>
        </Switch>
      ) : (
        <Switch>
          <Route path="/signup" user={user} setUser={setUser}>
            <NavLS />
            <SignUp setUser={setUser} />
          </Route>
          <Route path="/">
            <NavLS />
            <Login handleLogin={handleLogin} />
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
