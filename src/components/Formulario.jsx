import React, { useEffect, useState} from 'react'
import Error from './Error';

const Formulario = ({ pacientes, setPacientes, paciente, setPaciente }) => {
    const [nombre, setNombre]           = useState('');
    const [propieatrio, setPropieatrio] = useState('');
    const [email, setEmail]             = useState('');
    const [fecha, setFecha]             = useState('');
    const [sintomas, setSintomas]       = useState('');
    const [error, setError]             = useState(false);


    /*
    ** Efecto que se dispara cuando se quiere editar un paciente y
    ** pintar esos valores en el formulario
     */
    useEffect(() => {
        if ( Object.keys(paciente).length > 0 ) {
            setNombre(paciente.nombre);
            setPropieatrio(paciente.propieatrio);
            setEmail(paciente.email);
            setFecha(paciente.fecha);
            setSintomas(paciente.sintomas);
        }
    }, [paciente]);

    const generarId = () => {
        const random = Math.random().toString(36).substring(2);
        const date = Date.now().toString(36);

        return date + random ;
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        /*
        ** validacion del formulario
        */
        if ([ nombre, propieatrio, email, fecha, sintomas ].includes('')) {
            setError(true);
            return
        }

        /*
        ** Objeto de paciente y añadiendo valores
        ** del paciente al state de App.jsx
        */
        const objetoPaciente = {
            nombre,
            propieatrio,
            email,
            fecha,
            sintomas,
        }

        /*
        ** Validacion si el paciente tiene un id se edita,
        ** se agrega al state de pacientes y se limpia el state
        ** de paciente, de lo contrario se agrega un nuevo paciente
        */
        if (paciente.id) {
            // Editando el registro

            objetoPaciente.id = paciente.id
            const pacienteActualizado = pacientes.map( item => item.id ===
                paciente.id ? objetoPaciente : item )

            setPacientes(pacienteActualizado);
            setPaciente({});
        } else {
            // Agregando registro
            objetoPaciente.id = generarId();
            setPacientes([...pacientes, objetoPaciente]);
        }

        /*
        ** Limpieza del formulario
        */
        setNombre('');
        setPropieatrio('');
        setEmail('');
        setFecha('');
        setSintomas('');
        setError(false);
    }
    return (
        <div className='md:w-1/2 lg:w-2/5 mx-2'>
            <h2 className='font-black text-3xl text-center'>
                Seguimiento pacientes
            </h2>

            <p className='text-lg mt-5 text-center mb-10'>
                Añade Pacientes y {''}
                <span className='text-indigo-600 font-bold'>
                    Administralos
                </span>
            </p>

            <form
                className='bg-white shadow-md rounded-lg py-10 px-5 mb-10'
                onSubmit={handleSubmit}
            >
                { error && (
                    <Error mensaje='Todos los campos son obligatorios'/>
                ) }
                <div className='mb-5'>
                    <label htmlFor='mascota' className='block text-gray-700 uppercase font-bold'>
                        Nombre Mascota
                    </label>
                    <input
                        id='mascota'
                        type='text'
                        placeholder='Nombre de la mascota'
                        className='border-2 w-full p-2 mt-2 rounded-md placeholder-gray-400'
                        value={nombre}
                        onChange={(e) => setNombre(e.target.value)}
                    />
                </div>
                <div className='mb-5'>
                    <label htmlFor='propietario' className='block text-gray-700 uppercase font-bold'>
                        Nombre Propietario
                    </label>
                    <input
                        id='propietario'
                        type='text'
                        placeholder='Nombre del propietario'
                        className='border-2 w-full p-2 mt-2 rounded-md placeholder-gray-400'
                        value={propieatrio}
                        onChange={(e) => setPropieatrio(e.target.value)}
                    />
                </div>
                <div className='mb-5'>
                    <label htmlFor='email' className='block text-gray-700 uppercase font-bold'>
                        Email
                    </label>
                    <input
                        id='email'
                        type='email'
                        placeholder='Correo electronico'
                        className='border-2 w-full p-2 mt-2 rounded-md placeholder-gray-400'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div className='mb-5'>
                    <label htmlFor='date' className='block text-gray-700 uppercase font-bold'>
                        Fecha de alta
                    </label>
                    <input
                        id='date'
                        type='date'
                        className='border-2 w-full p-2 mt-2 rounded-md placeholder-gray-400'
                        value={fecha}
                        onChange={(e) => setFecha(e.target.value)}
                    />
                </div>
                <div className='mb-5'>
                    <label htmlFor='sintomas' className='block text-gray-700 uppercase font-bold'>
                        Sintomas
                    </label>
                    <textarea
                        id='sintomas'
                        className='border-2 w-full p-2 mt-2 rounded-md placeholder-gray-400'
                        placeholder='Describe los sintomas'
                        value={sintomas}
                        onChange={(e) => setSintomas(e.target.value)}
                    />
                </div>

                <input
                    type='submit'
                    className='bg-indigo-600 w-full p-3 rounded-md text-white uppercase font-bold hover:bg-indigo-800 cursor-pointer transition-all'
                    value={ paciente.id ? 'Editar paciente' : 'Agregar paciente'  }
                />
            </form>
        </div>
    )
}

export default Formulario
