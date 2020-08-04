import React from 'react';
import datos from '../datos/index';

export default class ListadoDatos extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            vista : props.vista
        }
    }

    mostrarDatos(nombre){
        this.setState({valores: datos[nombre]});

    }

    render(){
        
        return this.state.valores.map((valor)=>{
            return <li key={valor.id}>{valor.nombre}</li>
            })
    }
}