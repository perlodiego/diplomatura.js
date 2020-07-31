import React, { Component } from 'react';
import datos from '../datos';
import Elemento from './Elemento';
import AddElemento from './AddElemento';

export default class Lista extends Component {
	constructor(props) {
		super(props);
		this.vistaActual = props.vistaActual;
		this.state = { vistaActual: this.getDatos(this.vistaActual) };
		this.elementos = Object.keys(this.state.vistaActual[0]);
	}
	getDatos(vistaActual) {
		return datos[vistaActual];
	}
	componentDidUpdate(prev_props, prev_state) {
		if (prev_props.vistaActual !== this.props.vistaActual) {
			this.vistaActual = this.props.vistaActual;
			this.setState({ vistaActual: this.getDatos(this.vistaActual) });
			this.elementos = Object.keys(this.state.vistaActual[0]);
		}
	}
	add(nuevo) {
		this.setState({ vistaActual: this.state.vistaActual.concat(nuevo) });
	}
	destroy(i) {
		const index = this.state.vistaActual.findIndex(
			(elem, index) => index === i
		);
		if (index > -1) {
			const vistaActual = this.state.vistaActual;
			vistaActual.splice(index, 1);
			this.setState({ vistaActual });
		}
	}
	render() {
		return (
			<>
				<AddElemento
					addHandler={this.add.bind(this)}
					elementos={this.elementos.reduce((obj, elem) => {
						obj[elem] = '';
						return obj;
					}, {})}
				/>
				{this.state.vistaActual.map((elem, index) => (
					<div className="list-group-item" key={index}>
						<Elemento
							elementos={Object.values(elem)}
							borrar={this.destroy.bind(this)}
							index={index}
						/>
					</div>
				))}
			</>
		);
	}
}
