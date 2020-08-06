import React from "react";
import "./App.css";
import datos from "./datos";
import Routers from "./routers";
import { BrowserRouter as Router, Link } from "react-router-dom";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      vistaActual: "",
      idDetalleSeleccionado: -1,
      materias: datos.materias,
      calificaciones: datos.calificaciones,
    };
  }
  /**
   * Se utiliza para disparar el cambio de vista.
   * Si viene un id seleccionado, se setea como el detalle actual.
   * @param {*} vista
   * @param {*} idSeleccionado
   */
  setVistaActual = (vista, idSeleccionado) => {
    const newState = { vistaActual: vista };

    if (idSeleccionado) {
      newState.idDetalleSeleccionado = idSeleccionado;
    } else {
      newState.idDetalleSeleccionado = -1;
    }

    this.setState(newState);
  };

  render() {
    const vistaActual = "";
    return (
      <Router>
        <div className="App">
          <Link to="/">
            <header className="alert alert-info">Diplomatura JS</header>
          </Link>
          <div id="botonera">
            <Link to="/alumnos">
              <button
                onClick={() => this.setVistaActual(<Routers />)}
                className="btn btn-outline-info"
              >
                Alumnos
              </button>
            </Link>
            <Link to="/profesores">
              <button
                onClick={() => this.setVistaActual(<Routers />)}
                className="btn btn-outline-info"
              >
                Profesores
              </button>
            </Link>
            <Link to="/materias">
              <button
                onClick={() => this.setVistaActual(<Routers />)}
                className="btn btn-outline-info"
              >
                Materias
              </button>
            </Link>
            <Link to="/calificaciones">
              <button
                onClick={() => this.setVistaActual(<Routers />)}
                className="btn btn-outline-info"
              >
                Calificaciones
              </button>
            </Link>
          </div>

          <h2>{this.state.vistaActual}</h2>
          <div className="mainView">{vistaActual}</div>
        </div>
      </Router>
    );
  }
}

export default App;
