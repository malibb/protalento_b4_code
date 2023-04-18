import './App.css'
import NormalClock from './components/NormalClock'

function App() {

  return (
    <div className="App">
      <div className="options">
        <button className="btn">
          Pomodoro
        </button>
      </div>
      <NormalClock/>
      {/* <NormalClock></NormalClock> */}
    </div>
  )
}

export default App
