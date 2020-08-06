import React from "react";
import ListaAlumnos from "./listaalumnos";
import ListaProfesores from "./listaprofesores";
export default class Lista extends React.Component {
  render() {
    const { lista, setVista, deleteItem } = this.props;
    if (lista.idDetalleSeleccionado === 1) {
      return <ListaAlumnos alumnos={lista.alumnos} method={setVista} />;
    } else if (lista.idDetalleSeleccionado === 2) {
      return (
        <ListaProfesores
          profesores={lista.profesores}
          method={setVista}
          deleteItem={deleteItem}
        />
      );
    } else if (lista.idDetalleSeleccionado === 3) {
      return (
        <ul>
          {lista.materias.map((m, key) => {
            return <li key={key}>{m.nombre}</li>;
          })}
        </ul>
      );
    } else if (lista.idDetalleSeleccionado === 4) {
      return (
        <ul>
          {lista.calificaciones.map((c, key) => {
            return <li key={key}>{c.alumno}</li>;
          })}
        </ul>
      );
    } else {
      return "";
    }
  }
}
