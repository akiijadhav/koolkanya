import React, { Suspense, lazy } from "react";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// import logo from './logo.svg';
import './App.css';
import NavBar from "./Components/Navbar/NavBar";

//Lazy Loading Routes i.e. code splitting
const Home = lazy(() => import("./Pages/Home/Home"));
const Community = lazy(() => import("./Pages/Community/Community"));
const Events = lazy(() => import("./Pages/Events/Events"));
const Blogs = lazy(() => import("./Pages/Blogs/Blogs"));

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Router>
          <Suspense fallback={<div>Loading...</div>}>
            <NavBar />
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/community" component={Community} />
              <Route exact path="/events" component={Events} />
              <Route exact path="/blogs" component={Blogs} />
            </Switch>
          </Suspense>
        </Router>
      </header>
    </div>
  );
}

export default App;
