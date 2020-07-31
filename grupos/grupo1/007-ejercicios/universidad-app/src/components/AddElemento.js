import React, { Component } from 'react';

export default class AddElemento extends Component {
	constructor(props) {
		super(props);
		this.state = props.elementos;
		this.newProps = '';
	}

	componentDidUpdate(prev_props, prev_state) {
		console.log('prev_props');
		console.log(prev_props.elementos);
		console.log('this.props');
		console.log(this.props.elementos);
		if (prev_props.elementos !== this.props.elementos) {
			this.newProps = this.state;
			this.setState(this.newProps);
		}
	}
	onChange(e) {
		const key = e.target.id;
		const value = e.target.value;

		const elementoToAdd = {};
		elementoToAdd[key] = value;

		this.setState(elementoToAdd);
	}
	agregar(e) {
		this.props.addHandler(this.state);
		Array.from(e.target.parentNode.children).forEach((elemento) => {
			if (elemento.tagName === 'input'.toUpperCase()) elemento.value = '';
		});
	}
	render() {
		const inputs = Object.keys(this.state);
		for (var i = 0; i < inputs.length; i++) {
			const elem = inputs[i];
			if (this.newProps) {
				if (this.newProps[elem] === undefined) {
					continue;
				}
			}
			console.log(elem);
			inputs[i] = (
				<>
					&nbsp;{elem}{' '}
					<input key={elem} id={elem} onChange={this.onChange.bind(this)} />
				</>
			);
		}

		return (
			<div>
				{inputs}
				<button onClick={this.agregar.bind(this)} className="btn btn-primary">
					Add
				</button>
			</div>
		);
	}
}
