import { useState } from 'react'
import './styles.css'

export default function BotonesPomodoro (props){

    const [timePomodoroInput , setTimePomodoroInput ] = useState(25)


    const onSubmitHandled = (e) => {
        e.preventDefault()
        // 1 obtener el momento en el que le damos submit al formulario
        const timeFinal = new Date().getTime()
        // 2 quiero guardar el numero de minutos que el usuario selecciono y el momento 
        props.setSettingsPropiedad({
            timeFinal, timePomodoroInput
        })
    }

    return (
        <>
        <form className='settings' onSubmit={onSubmitHandled}> 
            <label>Tiempo</label>
            <input 
            type="number" 
            min='0'
            max='60'
            defaultValue={timePomodoroInput}
            onChange={(e)=>{
                setTimePomodoroInput(e.target.value)
            }}
            />
            <button className='btn'>Iniciar reloj</button>
        </form>
        </>
    )
}

