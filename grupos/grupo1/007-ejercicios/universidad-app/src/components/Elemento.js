import React from 'react';

export default function Elemento(props) {
	return (
		<>
			{props.elementos.map((elem, id) => (
				<span key={id} val="elem">
					{elem}
				</span>
			))}
			<button
				className="btn btn-outline-dark"
				onClick={() => {
					props.borrar(props.index);
				}}
			>
				Delete
			</button>
		</>
	);
}
