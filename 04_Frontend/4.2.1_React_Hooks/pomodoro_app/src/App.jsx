import './App.css'
import NormalClock from './components/NormalClock'
import PomodoroClock from './components/PomodoroClock'
import BotonesPomodoro from './components/BotonesPomodoro'
import { useState } from 'react'

function App() {
const [pomodoro, setPomodoro] = useState(false)
const [reloj, setReloj] = useState(true)

const [settings, setSettings ] = useState({
  timeFinal: 0,
  timePomodoroInput: '0'
})

const mostrarPomodoro = () =>{
  if (pomodoro) {
    return <>
          <PomodoroClock  settings={settings}/>
      {/* Este componente obtiene los valores de settings */}
      <BotonesPomodoro  setSettingsPropiedad={setSettings}/>
    </>
  } else {
    return <NormalClock/>
  }
}

const togglePomodoro = () => {

  // if (pomodoro === true)
  // if (pomodoro ) {
  //   setPomodoro(false)
  //    setReloj(true)
  // }else {
  //   setPomodoro( true)
  //    setReloj(false)
  // }
// Operacion de negacion logico 
// poner un signo de exclamacion delante de una variable para convertir su valor a un booleano y negar su valor inicioal
  setPomodoro(!pomodoro)
  setReloj(!reloj)
}

console.log(reloj, pomodoro)
  return (
    <div className="App">
      <div className="options">
        <button className="btn" onClick={togglePomodoro}>
         {!pomodoro ? 'Pomodoro' : 'Reloj'}
        </button>
      </div>
      {/* <NormalClock/> */}
      {/* <NormalClock></NormalClock> */}
      {/* <PomodoroClock  settings={settings}/> */}
      {/* Este componente obtiene los valores de settings */}
      {/* <BotonesPomodoro  setSettingsPropiedad={setSettings}/> */}

      {mostrarPomodoro()}
    </div>
  )
}

export default App
