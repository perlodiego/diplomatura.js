import React from 'react';
import './assets/css/App.css';
import datos from './datos';
import Lista from './components/Lista';

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			vistaActual: 'alumnos',
			idDetalleSeleccionado: -1,
			alumnos: datos.alumnos,
			profesores: datos.profesores,
			materias: datos.materias,
			calificaciones: datos.calificaciones,
		};
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
	render() {
		return (
			<div className="App">
				<header className="alert alert-info">Diplomatura JS</header>
				<div id="botonera">
					<button
						className="btn btn-outline-info"
						onClick={() => this.setVistaActual('alumnos')}
					>
						Alumnos
					</button>
					<button
						className="btn btn-outline-info"
						onClick={() => this.setVistaActual('profesores')}
					>
						Profesores
					</button>
					<button
						className="btn btn-outline-info"
						onClick={() => this.setVistaActual('materias')}
					>
						Materias
					</button>
					<button
						className="btn btn-outline-info"
						onClick={() => this.setVistaActual('calificaciones')}
					>
						Calificaciones
					</button>
				</div>
				<h2>{this.state.vistaActual}</h2>
				<div className="mainView">
					<Lista vistaActual={this.state.vistaActual} />
				</div>
			</div>
		);
	}
}

export default App;
