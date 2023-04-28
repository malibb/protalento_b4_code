import axios from 'axios'
import { useEffect, useState } from 'react';

const nasaEndpoint = import.meta.env.VITE_REACT_APP_NASA_ENDPOINT;
const nasaApiKey = import.meta.env.VITE_REACT_APP_NASA_API_KEY;

function PhotoOfTheDay (){
    const [apod, setApod] = useState({})
console.log(nasaApiKey);
    // Opcion 1 para parametros 
    // axios.get(`${nasaEndpoint}planetary/apod?api_key${nasaApiKey}`, )
    useEffect(() => {
        axios.get(`${nasaEndpoint}planetary/apod`, {
            params: {
                api_key: nasaApiKey
            }
        } )
        .then( response => {
            setApod(response.data)
            console.log(response.data)
        })
        .catch( error =>{
            console.error(error)
        })
    }, [])


    return (
        <div>
            <h2>{apod.title}</h2>
            <span>{apod.copyright}</span>
            <span>{apod.date}</span>
            {/* <img src="" alt="" srcset="" /> */}
        </div>
    )
}

export default PhotoOfTheDay