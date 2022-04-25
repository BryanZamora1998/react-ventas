import { Fragment,React} from "react";
import {

  HashRouter as Router,
  Switch,
  useRouteMatch,
  Link,
  Route
  
} from "react-router-dom";
import './Home.css';
import Seguridad from "./seguridad/Seguridad";
import RoutePrivate from "../../util/routePrivate/RoutePrivate";
import { useHistory } from "react-router-dom";
import $ from 'jquery';
import Sweetalert2 from "../../util/sweetalert2/Sweetalert2";

export default function App() {
  const history = useHistory();

  /**
   * Redirige al login
   */
  function redirigirLogin (){
    history.push("../login");
  }

  const clickMe = (texto) => (e) => {

    if($(`#${texto}-show`).hasClass("show")){

      $(`#${texto}-show`)
      .removeClass("show")
      .addClass("unShow");

      $(`#${texto}`)
      .removeClass("active");

    }else{
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
            
            <div className="side">

                <div className="side-left">
                    <nav className="sidebar">
                      <div className="text">Sistema de ventas</div>
                        <ul>
                          <li><a href="#">Módulos</a></li>
                        <li>
                          <a href="#" id="feat" onClick={clickMe("feat")}>Feedback <span className="fa fa-caret-down first"></span></a>
                          <ul id="feat-show" className="unShow">
                            <li><Link  to={`/seguridad`}>Seguridad</Link></li>
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
                        <li><a href="#" onClick={redirigirLogin} >Cerrar sesion</a></li>
                      </ul>
                  </nav>
                </div>

                <div className="side-right">
                  <Switch>
                      <RoutePrivate exact path={`/seguridad`} component={Seguridad}></RoutePrivate>
                      <RoutePrivate exact path={`/clientes`} component={Seguridad}></RoutePrivate>
                  </Switch>
                </div>
            </div>
      </Router>
    );
}




