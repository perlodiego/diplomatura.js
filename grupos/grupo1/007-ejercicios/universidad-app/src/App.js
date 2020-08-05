import React from "react";
import "./App.css";
import datos from "./datos";
import Header from "./components/Header";
/*import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from "react-router-dom";*/
//import Buttons from './components/Button';
//import ListadoDatos from './components/ListadoDatos';

class Listado extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      listaAMostrar: datos.alumnos,
    };
  }

  handleClick = (e, dato) => {
    this.props.handleClick(e, dato);
  };

  render() {
    return (
      <ul className="list-group">
        {this.props.listaAMostrar.map((dato, index) => {
          return (
            <li
              className="list-group-item"
              key={index}
              onClick={(e) => {
                this.handleClick(e, dato);
              }}
            >
              {dato}
            </li>
          );
        })}
      </ul>
    );
  }
}

class Buttons extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      botones: ["Alumnos", "Profesores", "Materias", "Calificaciones"],
    };
  }

  handleClick = (e, nombre) => {
    this.props.handleClick(e, nombre);
  };

  render() {
    return this.state.botones.map((nombre, index) => (
      <button
        className="btn btn-outline-info"
        key={index}
        onClick={(e) => this.handleClick(e, nombre)}
      >
        {nombre}
      </button>
    ));
  }
}

class ListadoDetalle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  handleClick = (e, id) => {
    this.props.handleClick(e, id);
  };

  cleanString(string) {
    return JSON.stringify(string).replace(/^"|"$/g, "");
  }

  render() {
    const encabezados = Object.keys(this.props.detalleAMostrar);
    return (
      <table className="table table-striped">
        <thead className="thead-dark">
          <tr>
            {encabezados.map((encabezado, index) => (
              <th key={index}>{encabezado}</th>
            ))}
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            {encabezados.map((encabezado, index) => {
              return (
                <td key={index}>
                  {this.cleanString(this.props.detalleAMostrar[encabezado])}
                </td>
              );
            })}
            <td>
              <button
                onClick={(e) =>
                  this.handleClick(e, this.props.detalleAMostrar.id)
                }
              >
                Borrar
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    );
  }
}

class Formulario extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  handleClick(e) {
    e.preventDefault();
    const valor = document.getElementById("valor");
    console.log(valor.value);
  }

  render() {
    return (
      <form>
        <input id="valor"></input>
        <button className="btn btn-secondary" onClick={this.handleClick}>
          Enviar
        </button>
      </form>
    );
  }
}

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      vistaActual: "Alumnos",
      idDetalleSeleccionado: -1,
      alumnos: datos.alumnos,
      profesores: datos.profesores,
      materias: datos.materias,
      calificaciones: datos.calificaciones,
      listaAMostrar: datos.alumnos.map((alumno) => alumno.nombre),
      detalleAMostrar: [],
      mostrarDetalle: false,
      mostrarFormulario: true,
    };
  }

  handleClickBoton = (e, nombre) => {
    this.setState({
      vistaActual: nombre,
      detalleAMostrar: [],
      mostrarDetalle: false,
    });
    const tabla = nombre.toLowerCase();

    if (tabla === "calificaciones") {
      this.setState({
        listaAMostrar: this.state["alumnos"].map((alumno) => alumno.nombre),
      });
    } else {
      this.setState({
        listaAMostrar: this.state[tabla].map((valor) => valor.nombre),
      });
    }
  };

  handleClickListado(e, dato) {
    const tabla = this.state.vistaActual.toLowerCase();
    if (tabla !== "calificaciones") {
      for (let objeto of datos[tabla]) {
        if (objeto.nombre === dato) {
          this.setState({
            listaAMostrar: [],
            detalleAMostrar: objeto,
            mostrarDetalle: true,
          });
          console.log(objeto);
          break;
        }
      }
    } else {
      const id = this.state.alumnos.find((alumno) => alumno.nombre === dato).id;
      const mostrar = this.state.calificaciones.filter(
        (calificacion) => calificacion.alumno === id
      );
      this.setState({
        listaAMostrar: [],
        detalleAMostrar: mostrar[0],
        mostrarDetalle: true,
      });
      console.log(mostrar);
    }
  }

  handleClickListadoDetalle(e, id) {
    console.log(
      "Eliminado el id: " + id + " de la tabla: " + this.state.vistaActual
    );
    this.handleClickBoton("", this.state.vistaActual);
  }

  render() {
    return (
      <div className="App">
        <Header />
        <div id="botonera">
          <Buttons handleClick={this.handleClickBoton} />
        </div>
        <h2>{this.state.vistaActual}</h2>
        <div>
          {!this.state.mostrarDetalle ? <Formulario></Formulario> : <div></div>}
        </div>
        <div>
          <Listado
            listaAMostrar={this.state.listaAMostrar}
            handleClick={this.handleClickListado.bind(this)}
          ></Listado>
        </div>
        <div>
          {this.state.mostrarDetalle ? (
            <ListadoDetalle
              detalleAMostrar={this.state.detalleAMostrar}
              handleClick={this.handleClickListadoDetalle.bind(this)}
            />
          ) : (
            <div></div>
          )}
        </div>
      </div>
    );
  }

  /**
   * Se utiliza para disparar el cambio de vista.
   * Si viene un id seleccionado, se setea como el detalle actual.
   * @param {*} vista
   * @param {*} idSeleccionado
   */
  setVistaActual(vista, idSeleccionado) {
    const newState = { vistaActual: vista };
    if (idSeleccionado) {
      newState.idDetalleSeleccionado = idSeleccionado;
    } else {
      newState.idDetalleSeleccionado = -1;
    }
    this.setState(newState);
  }
}

export default App;
