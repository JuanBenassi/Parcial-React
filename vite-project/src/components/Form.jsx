import React, { useState } from 'react'

const Formulario = ({ handler }) => {

    const [nombre, setNombre] = useState("")
    const [apellido, setApellido] = useState("")
    const [err, setErr] = useState("")


    const handleSubmit = (e) => {
        e.preventDefault()
        const data = {
            nombre: nombre,
            edad: apellido
        }
        if (data.nombre.length < 3) {
            setErr('Necesita más caracteres')
            handler()

        } else {
            setErr('')
            handler(data.nombre, data.apellido)
        }
    }



    return (
        <form
            className='form'
            action=""
            onSubmit={handleSubmit}
        >
            <label htmlFor="">Nombre</label>
            <input
                type="text"
                value={nombre}
                onChange={e => { setNombre(e.target.value) }}
            />

            <label htmlFor="">Edad</label>
            <input
                type="number"
                value={edad}
                onChange={e => { setApellido(e.target.value) }}
            />

            <button type='submit'>ENVIAR</button>
            {err && <span id='msjErr'>{err}</span>}

        </form>



    )

}

export default Formulario