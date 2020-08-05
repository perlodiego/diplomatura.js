import React, { Component } from "react";
import datos from "../datos/index";

export default class Lista extends Component {
  constructor(props) {
    super(props);
    this.state = {
      vistaActual: "lista",
      tabla: this.props.tabla,
    };
  }

  getLista(tabla) {
    if (tabla) {
      return (
        <table className="table">
          <thead>
            <tr>
              <th>Id</th>
              <th>Nombre</th>
              <th>Acción</th>
            </tr>
          </thead>
          <tbody>
            {datos[tabla].map((dato) => (
              <tr key={dato.id}>
                <td>{dato.id}</td>
                <td>{dato.nombre}</td>
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
