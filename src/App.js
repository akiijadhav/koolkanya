import React, { Suspense, lazy } from "react";
//import Router from react-router-dom & Switch for Routes
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
//import navbar for same layout on each page
import NavBar from "./Components/Navbar/NavBar";
//import App.scss for common styles defined there like colors & stuff --> bad approach .. need to change it
import './App.scss';

//import spinner for loading
import Spinner from "./assets/Spinner/Ripple.svg";
//Lazy Loading Routes i.e. code splitting
const Home = lazy(() => import("./Pages/Home/Home"));
const Community = lazy(() => import("./Pages/Community/Community"));
const Events = lazy(() => import("./Pages/Events/Events"));
const Blogs = lazy(() => import("./Pages/Blogs/Blogs"));

function App() {
  return (
    <div className="App">
        <Router>
          <Suspense fallback={<div className="SpinnerContainer"><img src={Spinner} className="spinner" alt="loading Spinner"/></div>}>
            <NavBar />
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/community" component={Community} />
              <Route exact path="/events" component={Events} />
              <Route exact path="/blogs" component={Blogs} />
            </Switch>
          </Suspense>
        </Router>
    </div>
  );
}

export default App;
