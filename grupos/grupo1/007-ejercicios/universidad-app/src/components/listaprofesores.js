import React from "react";
import datos from "../datos";
import Profesor from "./profesor";

export default class ListaProfesores extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      nombre: "",
      profesores: datos.profesores,
    };
  }
  addItem = (e) => {
    e.preventDefault();
    const item = {
      nombre: this.state.nombre,
      id: this.state.profesores.length + 1,
    };
    this.setState({ profesores: [...this.state.profesores, item] });

    /*} else if (type === "materia") {
      this.setState({ materias: [...this.state.materias, item] });
    } else if (type === "calificacion") {
      this.setState({ calificaciones: [...this.state.calificaciones, item] });
    } */
  };
  deleteItem = (id) => {
    const newList = this.state.profesores.filter(
      (profesor) => profesor.id !== id
    );
    this.setState({ profesores: newList });
    /*} else if (type === "materia") {
      const newList = this.state.materias.filter(
        (materia) => materia.id !== id
      );
      this.setState({ materias: newList });
    } else if (type === "calificacion") {
      const newList = this.state.calificaciones.filter(
        (calificacion) => calificacion.id !== id
      );
      this.setState({ calificaciones: newList });
    } */
  };
  onChange = (e) => {
    this.setState({ nombre: e.target.value });
  };

  render() {
    return (
      <div>
        <ul>
          {this.state.profesores.map((p, key) => {
            return (
              <Profesor profesor={p} key={key} deleteItem={this.deleteItem} />
            );
          })}
        </ul>
        <form>
          <input placeholder="Ingrese Nombre" onChange={this.onChange} />
          <button onClick={this.addItem}>Add</button>
        </form>
      </div>
    );
  }
}
