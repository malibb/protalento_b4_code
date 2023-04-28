import axios from 'axios'
import ShowPicture from "../../components/ShowPicture"
import SearchDate from "../../components/SearchDate"
import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"

const nasaEndpoint = import.meta.env.VITE_REACT_APP_NASA_ENDPOINT;
const nasaApiKey = import.meta.env.VITE_REACT_APP_NASA_API_KEY;

function PhotoByDay () {
    const [apod, setApod] = useState({})
    let {fechaQueSeleccionoMiUsuario} = useParams()
    useEffect(()=>{
        axios.get(`${nasaEndpoint}planetary/apod?date=${fechaQueSeleccionoMiUsuario}`, {
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
    }, [fechaQueSeleccionoMiUsuario])

    return (
        <div>
            {
                apod.url ? (
                    <div>
                        <ShowPicture apodInfo={apod}></ShowPicture>
                        <SearchDate></SearchDate>
                    </div>
                ) : (
                    <div>
                        <img 
                        src="https://media0.giphy.com/media/3o7bu3XilJ5BOiSGic/giphy.gif" 
                        alt="Cargando contenido" />
                    </div>
                )
            }

        </div>
    )
}

export default PhotoByDay