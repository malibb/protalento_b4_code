import './styles.css'
import axios from 'axios'
import { useEffect, useState } from 'react';
import ShowPicture from '../../components/ShowPicture';
import SearchDate from '../../components/SearchDate';

const nasaEndpoint = import.meta.env.VITE_REACT_APP_NASA_ENDPOINT;
const nasaApiKey = import.meta.env.VITE_REACT_APP_NASA_API_KEY;

function PhotoOfTheDay() {
    const [apod, setApod] = useState({})
    // const [dateSelect, setDateSelect] = useState(false)
    // Opcion 1 para parametros 
    // axios.get(`${nasaEndpoint}planetary/apod?api_key${nasaApiKey}`, )
    useEffect(() => {
        axios.get(`${nasaEndpoint}planetary/apod`, {
            params: {
                api_key: nasaApiKey
            }
        })
            .then(response => {
                setApod(response.data)
                console.log(response.data)
            })
            .catch(error => {
                console.error(error)
            })
    }, [])


    // const goToDaySelected = (e) => {
    //     e.preventDefault();
    //     axios.get(`${nasaEndpoint}planetary/apod?date=${dateSelect}`, {
    //         params: {
    //             api_key: nasaApiKey
    //         }
    //     })
    //         .then(response => {
    //             setApod(response.data)
    //             console.log(response.data)
    //         })
    //         .catch(error => {
    //             console.error(error)
    //         })
    // }



    // const today = new Date().toISOString().slice(0, 10);

    return (
        <div>
            {
                apod.url ? (
                    <div>
                        <ShowPicture apodInfo={apod}></ShowPicture>
                        <SearchDate></SearchDate>
                    </div>
                ) : (
                    <div className='container-loader'>
                        <img 
                        src="https://media0.giphy.com/media/3o7bu3XilJ5BOiSGic/giphy.gif" 
                        alt="Cargando contenido" />
                    </div>
                )
            }
        </div>
    )
}

export default PhotoOfTheDay