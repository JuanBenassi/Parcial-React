import React from 'react'

const Card = (props) => {

    return (
        <div id='msj'>
            <h2>Datos</h2>
            <span>Nombre: {props.nombre}</span>
            <span>Apellido: {props.apellido}</span>
        </div>
    )
}

export default Card