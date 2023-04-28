import { useEffect, useState } from 'react';


function ShowPicture (props)  {
    const [apod, setApod] = useState("")

    useEffect(() => {
        props.apodInfo && setApod(props.apodInfo)
    }, [props])


    return (
        <div>
            <h2>{apod.title}</h2>
            <span>{apod.copyright}</span>
            <span>{apod.date}</span>
            {/* Operador lógico 'y' */}
            {
                apod.media_type === 'video' && <p>Ve el siguiente video</p>
            }
            {/* Operador ternario */}
            {
                apod.media_type !== 'video' ? (
                    <img src={apod.url} alt={apod.title} />
                ) : (
                    <iframe src={apod.url} autoPlay={true}  ></iframe>
                )
            }
            <p>{apod.explanation}</p>
        </div>
    )
}

export default ShowPicture