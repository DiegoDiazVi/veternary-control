import React from 'react'

const Paciente = () => {
    return (
        <div className='mx-5 my-5 bg-white shadow-md px-5 py-10 rounded-lg'>
            <p className='font-bold mb-3 text-gray-700 uppercase'>
                Nombre: {''}
                <span className='font-normal normal-case'>Hook</span>
            </p>
            <p className='font-bold mb-3 text-gray-700 uppercase'>
                Propietario: {''}
                <span className='font-normal normal-case'>Diego</span>
            </p>
            <p className='font-bold mb-3 text-gray-700 uppercase'>
                Email: {''}
                <span className='font-normal normal-case'>email@email.com</span>
            </p>
            <p className='font-bold mb-3 text-gray-700 uppercase'>
                Fecha alta: {''}
                <span className='font-normal normal-case'>10 Diciembre de 2022</span>
            </p>
            <p className='font-bold mb-3 text-gray-700 uppercase'>
                Sintomas: {''}
                <span className='font-normal normal-case'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium pariatur eaque inventore suscipit amet aliquam perspiciatis, omnis quod consequuntur, eum molestiae delectus placeat ipsa sed consectetur. Tempore illum eaque praesentium.</span>
            </p>
        </div>
    )
}

export default Paciente