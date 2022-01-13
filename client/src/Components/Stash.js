// <div className="App">
//   <header className="App-header">
//     <NavBar user={user} setUser={setUser} />
//   </header>
//   {/* <MapContainer /> */}
//   <Login handleLogin={handleLogin} />
//   <SignUp setUser={setUser} />
// </div>

// WORKING VERSION ^






{user ? (
    <Switch path="/">
      <div className="App">
        <header className="App-header">
          {/* <NavBar user={user} setUser={setUser} /> */}
        </header>
        {/* <MapContainer /> */}
        <Login handleLogin={handleLogin} />
        <SignUp setUser={setUser} />
      </div>
    </Switch>
  ) : (
    <Switch>
      <Route
        path="/signup"
        element={<SignUp />}
        user={user}
        setUser={setUser}
      ></Route>
      <Route
        path="/login"
        element={<Login />}
        handleLogin={handleLogin}
      ></Route>
    </Switch>
  )}