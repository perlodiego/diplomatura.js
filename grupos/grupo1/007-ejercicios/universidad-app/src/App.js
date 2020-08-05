import React from "react";
import "./App.css";
import Lista from "./componentes/listas";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      vistaActual: null,
      idDetalleSeleccionado: -1,
    };
  }

  setVistaActual(vista, idSeleccionado) {
    const newState = { vistaActual: vista, id: idSeleccionado };
    this.setState(newState);
  }

  render() {
    return (
      <div className="App">
        <header className="alert alert-info">Diplomatura JS</header>
        <div id="botonera">
          <button
            onClick={() => this.setVistaActual("alumnos")}
            className="btn btn-outline-info"
          >
            Alumnos
          </button>
          <button
            onClick={() => this.setVistaActual("profesores")}
            className="btn btn-outline-info"
          >
            Profesores
          </button>
          <button
            onClick={() => this.setVistaActual("materias")}
            className="btn btn-outline-info"
          >
            Materias
          </button>
          <button
            onClick={() => this.setVistaActual("calificaciones")}
            className="btn btn-outline-info"
          >
            Calificaciones
          </button>
        </div>
        <h2>{this.state.vistaActual}</h2>
        <Lista tabla={this.state.vistaActual} />
      </div>
    );
  }
}

export default App;
