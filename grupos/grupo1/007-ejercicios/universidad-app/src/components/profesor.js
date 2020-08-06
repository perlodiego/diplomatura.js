import React from "react";

export default class Profesor extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: "",
      nombre: "",
    };
  }
  showMore = (e) => {
    if (e.target.name !== "button") {
      const newVista = (
        <div>
          <p>
            {this.props.profesor.id} - {this.props.profesor.nombre}
          </p>
        </div>
      );
    } else {
      this.props.deleteItem(this.props.profesor.id);
    }
  };
  render() {
    const { profesor, deleteItem } = this.props;
    return (
      <div>
        <li>
          {profesor.nombre}
          <button
            onClick={() => deleteItem(this.props.profesor.id)}
            className="btn btn-outline-info"
            name="button"
          >
            X
          </button>
        </li>
      </div>
    );
  }
}
