import React from "react";
import datos from "../datos";

export default class Listamaterias extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      materias: datos.materias,
    };
  }
  render() {
    return (
      <ul>
        {this.state.materias.map((m, key) => {
          return <li key={key}>{m.nombre}</li>;
        })}
      </ul>
    );
  }
}
