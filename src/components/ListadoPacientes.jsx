import React from 'react'
import Paciente from './Paciente'

const ListadoPacientes = ({pacientes, setPaciente, eliminarPaciente}) => {

    return (
        <div className='md:w-1/2 lg:w-3/5 md:h-screen overflow-auto '>
            {pacientes.length > 0 ? (
                <>
                <h2 className='font-black text-center text-3xl'>
                    Listado de pacientes
                </h2>

                <p className='text-lg mt-5 mb-10 text-center'>
                    Administra tus {''}
                    <span className='text-indigo-600 font-bold '>Pacientes y Citas</span>
                </p>
                {/*
                  **Metodo que itera y pinta el state de pacientes
                  **enviando las props al compoennte paciente
                 */}
                {pacientes.map( paciente => {
                    return (
                        <Paciente
                            key={paciente.id}
                            paciente={paciente}
                            setPaciente={setPaciente}
                            eliminarPaciente={eliminarPaciente}
                        />
                    )
                })}
                </>
            ) : (
                <>
                    <h2 className='font-black text-center text-3xl'>
                        No hay pacientes
                    </h2>

                    <p className='text-lg mt-5 mb-10 text-center'>
                        Comienza agregando tus {''}
                        <span className='text-indigo-600 font-bold '>Pacientes</span>
                    </p>
                </>
            )}
        </div>
    )
}

export default ListadoPacientes