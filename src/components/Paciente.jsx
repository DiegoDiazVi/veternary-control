import React from 'react'


/*
 ** componente que recibe como props el state del paciente que
 ** quiero renderizar y el modificador del state del paciende
 ** que voy a editar
 */
const Paciente = ({paciente, setPaciente, eliminarPaciente}) => {
    const { nombre, propieatrio, email, fecha,  sintomas, id } = paciente;

    const handleEliminar = () => {
        const respuesta = confirm('Deseas borrar este paciente ?')
        respuesta && eliminarPaciente(id);
    }

    return (
        <div className='mx-2 my-5 bg-white shadow-md px-5 py-10 rounded-lg'>
            <p className='font-bold mb-3 text-gray-700 uppercase'>
                Nombre: {''}
                <span className='font-normal normal-case'>{nombre}</span>
            </p>
            <p className='font-bold mb-3 text-gray-700 uppercase'>
                Propietario: {''}
                <span className='font-normal normal-case'>{propieatrio}</span>
            </p>
            <p className='font-bold mb-3 text-gray-700 uppercase'>
                Email: {''}
                <span className='font-normal normal-case'>{email}</span>
            </p>
            <p className='font-bold mb-3 text-gray-700 uppercase'>
                Fecha alta: {''}
                <span className='font-normal normal-case'>{fecha}</span>
            </p>
            <p className='font-bold mb-3 text-gray-700 uppercase'>
                Sintomas: {''}
                <span className='font-normal normal-case'>{sintomas}</span>
            </p>
            <div className='flex justify-between mt-5'>
                <button
                    type='button'
                    className='py-2 px-10 bg-indigo-600 hover:bg-indigo-800 text-white font-bold uppercase rounded-md'
                    onClick={() => setPaciente(paciente)}
                >
                    Editar
                </button>
                <button
                    type='button'
                    className='py-2 px-10 bg-red-600 hover:bg-red-800 text-white font-bold uppercase rounded-md'
                    onClick={handleEliminar}
                >
                    Eliminar
                </button>
            </div>
        </div>
    )
}

export default Paciente