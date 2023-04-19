import { useState } from 'react'
import './styles.css'

function PomodoroClock() {
    const [minutes, setMinutes] = useState('00')
    const [seconds, setSeconds] = useState('00')

    const timeFinal = 0

    // SETINTERVAL -> una funcion de JS que se utiliza para ejecutar una funcion de manera
    // repetida despues de un intervalo de tiempo
    // setInterval(funcion,tiempo)
    // el tiempo se pone en milisegundos

    const interval = setInterval(()=>{
        // 1 Obtener la hora actual en milisegundos
        const actualTime = new Date().getTime()
        // 2 Obtener el tiempo que dura mi pomodoro de minutos a milisegundos
        // El 10 representa los minutos que durara mi pomodoro
        const timePomodoro = 10 * 60 * 1000
        // 3 Obtener la hora de finalizacion del pomodoro
        const endTimePomodoro = timeFinal+ timePomodoro
        // 4 Calcular el tiempo restante en milisegundo, restar la hora de finalizacion del pomodoro (endTimePomodoro)
        // de la hora actual (actualTime)
        const tiempoRestante = endTimePomodoro - actualTime

        const m = new Date(tiempoRestante)
        const s = new Date(tiempoRestante)

        const numberMinutes = m.getMinutes()
        const numberSeconds = s.getSeconds()

        setMinutes(numberMinutes)
        setSeconds(numberSeconds)
    },1000)

    return (
        <div className='pomodoro-clock'>
            <div className='pomodoro-progress-go' />
            <p className='pomodoro-status'>Pomodoro</p>

            <span>
                <span className='minute'>{minutes}:</span>
                <span className='minute'>{seconds}</span>
            </span>
        </div>
    )
}

export default PomodoroClock