import { useEffect, useState } from 'react';
import './styles.css'


/*
Los hooks son funciones que permiten "engancharse" a los componentes de 
React para acceder a ciertas funcionalidades, como el estado o el ciclo 
de vida del componente, desde componentes funcionales. 
*/

function NormalClock() {
    // Use state es para estado
    const [hour, setHour] = useState('00')
    const [minutes, setMinutes] = useState('00')
    const [seconds, setSeconds] = useState('00')
    // const [name, setName] = useState('Montse')
    // const [name2, setName2] = useState('Montse')

    // Muchas renderizaciones
    // Use effect es para efectos secundarios
    // useEffect(()=>{
    //     setTimeout(()=>{
    //         setName(`Juan ${new Date().toString()}`)

    //     }, 2000)
    // }, [name])
    // Una sola renderizacion
    // useEffect(()=>{
    //     setTimeout(()=>{
    //         setName2(`Juan ${new Date().toString()}`)

    //     }, 2000)
    // }, [])

    useEffect(() => {
        const interval = setInterval(() => {
            const date = new Date()
            // 1 -> 01
            const h = date.getHours() < 10 ? `0${date.getHours()}` : date.getHours()
            const m = date.getMinutes() < 10 ? `0${date.getMinutes()}` : date.getMinutes()
            const s = date.getSeconds() < 10 ? `0${date.getSeconds()}` : date.getSeconds()
            setHour(h)
            setMinutes(m)
            setSeconds(s)
        }, 1000)

        /*
Retorna una función que se ejecutará cuando se desmonte el componente o cuando 
cambien las dependencias especificadas. Esta función limpia el intervalo 
creado con setInterval utilizando la función clearInterval, evitando que la 
función de callback se siga ejecutando después de desmontar el componente o 
actualizar las dependencias.
*/
        return () => clearInterval(interval)
    }, [hour, minutes, seconds])

    return (
        <div className='clock'>
            <div className='progress-go' />
            <p className='status'>Reloj</p>
            {/* <p>{name}</p>
            <p>{name2}</p> */}

            <span>
                <span className='hour'>{hour}:</span>
                <span className='minute'>{minutes}:</span>
                <span className='minute'>{seconds}</span>
            </span>
        </div>
    )
}

export default NormalClock