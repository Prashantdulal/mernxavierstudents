import React from "react";

//import router browse router
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "../src/App.css";
// import Home from "./components/Home";
// import Contact from "./components/Contact";
// import About from "./components/About";
import Login from "./components/Login";
import Signup from "./components/Signup";
// import ErrorPage from "../src/components/ErrorPage";
const App = () => {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route path="/addrecord" component={Signup} />
        </Switch>

      </Router>
    
  </>
  );
};

export default App;