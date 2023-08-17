import React, { useState } from 'react'

const Formulario = ({ handler }) => {

    const [nombre, setNombre] = useState("")
    const [apellido, setApellido] = useState("")
    const [err, setErr] = useState("")


    const handleSubmit = (e) => {
        e.preventDefault()
        const data = {
            nombre: nombre.trim(),
            apellido: apellido
        }
        if (data.nombre.length < 3 || data.apellido.length < 6) {
            setErr('Por favor chequea que la información sea correcta')
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

            <label htmlFor="">Apellido</label>
            <input
                type="text"
                value={apellido}
                onChange={e => { setApellido(e.target.value) }}
            />

            <button type='submit'>ENVIAR</button>
            {err && <span id='msjErr'>{err}</span>}

        </form>



    )

}

export default Formulario