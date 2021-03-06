import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { Route, Switch } from "react-router-dom";
import { Router } from "react-router";
import { createBrowserHistory } from "history";
import reportWebVitals from './reportWebVitals';

const appHistory = createBrowserHistory();

ReactDOM.render(
  <React.StrictMode>
    <Router history={appHistory}>
      <Switch>
        <Route exact path="/" component={App} />
       
      </Switch>
    </Router>
  </React.StrictMode>,
   document.getElementById("root")
  );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
