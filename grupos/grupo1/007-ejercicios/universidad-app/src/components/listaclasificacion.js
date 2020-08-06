import React from "react";
import datos from "../datos";

export default class ListaCalificaciones extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      calificaciones: datos.calificaciones,
    };
  }
  render() {
    return (
      <ul>
        {this.state.calificaciones.map((c, key) => {
          return <li key={key}>{c.alumno}</li>;
        })}
      </ul>
    );
  }
}
