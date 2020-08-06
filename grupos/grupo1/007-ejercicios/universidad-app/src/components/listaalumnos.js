import React from "react";
import datos from "../datos";

export default class ListaAlumnos extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      alumnos: datos.alumnos,
    };
  }
  addItem = (item) => {
    this.setState({ alumnos: [...this.state.alumnos, item] });
    /*  } else if (type === "profesor") {
      this.setState({ profesores: [...this.state.profesores, item] });
    } else if (type === "materia") {
      this.setState({ materias: [...this.state.materias, item] });
    } else if (type === "calificacion") {
      this.setState({ calificaciones: [...this.state.calificaciones, item] });
    } */
  };
  deleteItem = (id) => {
    const newList = this.state.alumnos.filter((alumno) => alumno.id !== id);
    this.setState({ alumnos: newList });
    /*  } else if (type === "profesor") {
      const newList = this.state.profesores.filter(
        (profesor) => profesor.id !== id
      );
      this.setState({ profesores: newList });
    } else if (type === "materia") {
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
  render() {
    return (
      <div>
        <ul>
          {this.state.alumnos.map((a, key) => {
            return (
              <li key={key}>
                {a.nombre}{" "}
                <button
                  onClick={() => this.deleteItem(a.id)}
                  className="btn btn-outline-info"
                  name="button"
                >
                  X
                </button>
              </li>
            );
          })}
        </ul>
        <form>
          <input placeholder="Ingrese Nombre"></input>
          <button>Add</button>
        </form>
      </div>
    );
  }
}
