import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function SearchDate () {
    const [dateSelect, setDateSelect] = useState(false)
    let navigate = useNavigate()

    const today = new Date().toISOString().slice(0, 10);

    const goToDaySelected = (e) => {
        e.preventDefault();
        navigate(`/photo/${dateSelect}`)
        // axios.get(`${nasaEndpoint}planetary/apod?date=${dateSelect}`, {
        //     params: {
        //         api_key: nasaApiKey
        //     }
        // })
        //     .then(response => {
        //         setApod(response.data)
        //         console.log(response.data)
        //     })
        //     .catch(error => {
        //         console.error(error)
        //     })
    }
    return (
        <div>
        <h2>Slecciona el día</h2>
        <input
            type="date"
            id="selectedDate"
            min='1995-06-16'
            max={today}
            onChange={(evento) => setDateSelect(evento.target.value)}
        />
        <button onClick={goToDaySelected}>Buscar</button>
    </div>
    )
}


