import React from 'react';

export default class Buttons extends React.Component{
    constructor(props){
        super(props);
        this.state={
            botones: ['Alumnos', 'Profesores', 'Materias', 'Calificaciones'],
            seleccion:''
        }
    }

    ejecutar(nombre){
        this.setState({seleccion: nombre});
        this.props.alterarLista(nombre.toLowerCase());
    }


    render(){
        return this.state.botones.map((nombre)=>
        <button className="btn btn-outline-info" key={nombre} onClick={()=>{
            this.ejecutar(nombre)
        }}>{nombre}</button>)
    }
}
