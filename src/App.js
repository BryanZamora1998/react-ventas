import React from "react";
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom'
import Login from "./page/login/Login";
import Home from "./page/home/Home";
import RoutePrivate from "./util/routePrivate/RoutePrivate";

function App() {

  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Login}></Route>
        <Route exact path="/login" component={Login}></Route>
        <Route exact path="/home" component={Home}></Route>
      </Switch>
    </Router>
  );
}

export default App;
