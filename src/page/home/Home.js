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
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <Link className="navbar-brand" to={`${match.path}`} >MocaSystem</Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav mr-autob w-100">
                <li className="nav-item active">
                  <Link className="nav-link" to={`${match.path}`}>Home <span className="sr-only">(current)</span></Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to={`${match.path}/seguridad`}>Seguridad</Link>
                </li>
                <li className="nav-item w-100">
                <button className="nav-link float-right mr-25" onClick={redirigirLogin}>Cerra sesion</button>
                </li>
              </ul>
            </div>
          </nav>

          <Switch>
              <RoutePrivate exact path={`${match.path}`} component={Seguridad}></RoutePrivate>
              <RoutePrivate exact path={`${match.path}/seguridad`} component={Seguridad}></RoutePrivate>
              <RoutePrivate exact path={`${match.path}/clientes`} component={Seguridad}></RoutePrivate>
          </Switch>
      </Router>
    );
}