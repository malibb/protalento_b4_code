import { useState } from 'react'
import reactLogo from './assets/react.svg' 
import viteLogo from '/vite.svg'
import './App.css'

// Los componentes se escriben con mayúscula
// JSX sintaxis de JS que nos permite escribit codigo HTML y CSS en archivos JS, JSX es comunmente utilizado en React
// children es cualquier contenido que se encuentre dentro d eun componente y que se renderice como parte del mismo
function Header({ children }){
  return (
    <div>
      {/* <h2>Hola soy un Header</h2> */}
      {children}
    </div>
  )
}



function App() {
  const [count, setCount] = useState(0)
  const nombre = 'Cristian';
  return (
    <div className="App">
      {/* <Header /> */}
      <Header>
        <ul>
          <li>Opcion 1</li>
          <li>Opcion 2</li>
      
          <li><h1>Bienvenido {nombre} </h1> </li>
        </ul>
      </Header>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Bienvenido {nombre} </h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          contador is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  )
};

export default App;
