import './App.css'
import NormalClock from './components/NormalClock'
import PomodoroClock from './components/PomodoroClock'

function App() {

  return (
    <div className="App">
      <div className="options">
        <button className="btn" >
          Pomodoro
        </button>
      </div>
      {/* <NormalClock/> */}
      {/* <NormalClock></NormalClock> */}
      <PomodoroClock />
    </div>
  )
}

export default App
