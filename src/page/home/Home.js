import React from "react";
import {

  BrowserRouter as Router,
  Switch,
  useRouteMatch,
  Redirect,
  Link,
  Route
  
} from "react-router-dom";
import './Home.css';
import Seguridad from "./seguridad/Seguridad";
import RoutePrivate from "../../util/routePrivate/RoutePrivate";
import { useHistory } from "react-router-dom";
import Login from "../login/Login";

export default function App() {
  const history = useHistory();

  /**
   * Redirige al login
   */
  function redirigirLogin (){
    history.push("../login");
  }

  let match = useRouteMatch();

    return (
      <Router>
          
          <nav className="sidebar">
            <div className="text">Side menu</div>
              <ul>
                <li><a href="#">Dasboard</a></li>
                <li>
                  <a href="#">Feacture
                    <span className="fas fa-caret-down"></span>
                  </a>
                   <ul>
                     <li><a href="#">Page</a></li>
                     <li><a href="#">Elements</a></li>
                  </ul>
                </li>
                <li>
                  <a href="#">Service
                  <span className="fas fa-caret-down"></span>
                  </a>
                   <ul>
                     <li><a href="#">Disagner</a></li>
                     <li><a href="#">web designe</a></li>
                  </ul>
                </li>
                 <li><a href="#">Portafolio</a></li>
                 <li><a href="#">Overview</a></li>
                 <li><a href="#">Shortcuts</a></li>
                 <li><a href="#">Feedback</a></li>
              </ul>
          </nav>

         

          <Switch>
              <RoutePrivate exact path={`${match.path}`} component={Seguridad}></RoutePrivate>
              <RoutePrivate exact path={`${match.path}/seguridad`} component={Seguridad}></RoutePrivate>
              <RoutePrivate exact path={`${match.path}/clientes`} component={Seguridad}></RoutePrivate>
          </Switch>
      </Router>
    );
}