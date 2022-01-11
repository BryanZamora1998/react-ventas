import React from "react";
import {

  BrowserRouter as Router,
  Switch,
  useRouteMatch
  
} from "react-router-dom";
import './Home.css';
import Seguridad from "./seguridad/Seguridad";
import RoutePrivate from "../../util/routePrivate/RoutePrivate";
import { useHistory } from "react-router-dom";
import $ from 'jquery';

export default function App() {
  const history = useHistory();

  /**
   * Redirige al login
   */
  function redirigirLogin (){
    history.push("../login");
  }

  const clickMe = (texto) => (event) => {

    if($(`#${texto}-show`).hasClass("show")){

      console.log("Eliminado");
      $(`#${texto}-show`)
      .removeClass("show")
      .addClass("unShow");

      $(`#${texto}`)
      .removeClass("active");

    }else{
      
      console.log("guardado");
      $(`#${texto}-show`)
      .removeClass("unShow")
      .addClass("show")
      .addClass("active");

      $(`#${texto}`)
      .addClass("active");
    }
  }

    let match = useRouteMatch();

      return (
        <Router>
            
            <nav className="sidebar">
              <div className="text">Side menu</div>
                <ul>
                  <li><a href="#">Dasboard</a></li>
                <li>
                   <a href="#" id="feat" onClick={clickMe("feat")}>Feedback <span className="fa fa-caret-down first"></span></a>
                   <ul id="feat-show" className="unShow">
                     <li><a href="#">Page</a></li>
                     <li><a href="#">Elements</a></li>
                  </ul>
                </li>
                 <li><a href="#">Portafolio</a></li>
                 <li><a href="#">Overview</a></li>
                 <li><a href="#">Shortcuts</a></li>
                 <li>
                   <a href="#" id="serv" onClick={clickMe("serv")}>Servicios <span className="fa fa-caret-down first serv"></span></a>
                   <ul id="serv-show" className="unShow">
                     <li><a href="#">Page</a></li>
                     <li><a href="#">Elements</a></li>
                  </ul>
                </li>
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