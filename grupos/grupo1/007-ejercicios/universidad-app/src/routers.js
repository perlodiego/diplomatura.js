import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ListaAlumnos from "./components/listaalumnos";
import ListaProfesor from "./components/listaprofesores";
import ListaMaterias from "./components/listamaterias";
import ListaCalificaion from "./components/listaclasificacion";
import App from "./App";

export default class Routers extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Switch>
        <Route exact path="/alumnos" component={ListaAlumnos} />
        <Route exact path="/profesores" component={ListaProfesor} />
        <Route exact path="/materias" component={ListaMaterias} />
        <Route exact path="/calificaciones" component={ListaCalificaion} />
        <Route exact path="/" component={App} />
      </Switch>
    );
  }
}
