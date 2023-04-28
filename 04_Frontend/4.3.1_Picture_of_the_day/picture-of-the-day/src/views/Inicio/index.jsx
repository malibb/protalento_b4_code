import './styles.css'
import { Link } from 'react-router-dom'

function Inicio() {
    return (
        <div className="inicio-container">
            <h2>Picture of the day</h2>
            <Link to={'/photoToday'}> Ver foto del día</Link>
            {/* <button className="btn-inicio">Ver foto del día</button> */}
        </div>
    )
}

export default Inicio
