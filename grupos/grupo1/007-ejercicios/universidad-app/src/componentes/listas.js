import React, { Component } from "react";
import datos from "../datos/index";

export default class Lista extends Component {
  constructor(props) {
    super(props);
    this.state = {
      vistaActual: "lista",
      tabla: this.props.tabla,
    };
    console.log(datos["materias"][1].nombre);
  }

  getLista(tabla) {
    if (tabla) {
      return (
        <table className="table">
          <thead>
            <tr>
              <th>Id</th>
              {tabla === "calificaciones" ? <th>Materia</th> : <th>Nombre</th>}
              {tabla === "alumnos" ? (
                <th>Edad</th>
              ) : tabla === "calificaciones" ? (
                <th>Nota</th>
              ) : (
                <th></th>
              )}
              <th>Acción</th>
            </tr>
          </thead>
          <tbody>
            {datos[tabla].map((dato) => (
              <tr
                key={
                  tabla === "calificaciones"
                    ? "" + dato.alumno + dato.materia
                    : dato.id
                }
              >
                <td>
                  {tabla === "calificaciones"
                    ? datos["alumnos"][dato.alumno].nombre
                    : dato.id}
                </td>
                <td>
                  {tabla === "calificaciones"
                    ? datos["materias"][dato.materia].nombre
                    : dato.nombre}
                </td>
                <td>
                  {tabla === "calificaciones"
                    ? dato.nota
                    : tabla === "alumnos"
                    ? dato.edad
                    : ""}
                </td>

                <td>
                  <button
                    type="button"
                    className="btn btn-outline-info"
                    onClick={() => this.setVistaActual("", dato)}
                  >
                    <i className="fa fa-search" />
                  </button>
                  <button
                    type="button"
                    className="btn btn-outline-danger"
                    onClick={() => this.delete(dato)}
                  >
                    <i className="fa fa-trash-o" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      );
    }
  }

  render() {
    return <div className="container">{this.getLista(this.props.tabla)}</div>;
  }
}
