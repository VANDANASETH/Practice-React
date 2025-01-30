import { useEffect, useState } from "react"
import '../App.css'
const data = ["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwH62Xh6ntQBWrkmW9xciOnR3O2YhbUzHmiQ&s",
             "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5ksqNJ35SGbHD0w0ng4RxwI5IWDKXLzKnGQ&s",
             "https://wallpapersmug.com/download/1024x768/56941d/random-spikes-abstract-texture.jpg",
             "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGa3894J9DgbZ07vtCMqAzjy0c0ow_XTGG6g&s",
             "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWFboOCHNRfacsWIwbaS9g8n9uTEw9Vr85rg&s"]

const ImageSlider = ()=>{
    const [activateImage, setActivateImage] = useState(0)

    const handleClickPrev = () =>{
        if(activateImage === 0){
            setActivateImage(data.length -1)
        }
        else{
            setActivateImage(activateImage - 1)
        }
        
    }
    const handleClickNext = () =>{
        if(activateImage === (data.length -1)){
            setActivateImage(0)
        }
        else{
            setActivateImage(activateImage + 1)
        }
    }

    useEffect(()=>{
        const timer = setTimeout(()=>{
            handleClickNext()
        },5000)

        return(()=>{
            clearInterval(timer)
        })

    },[activateImage])
    return (
        <>
        <div>React</div>
        <button className="btn" onClick={handleClickPrev}>Prev</button>
        {data.map((url,i)=>(
            activateImage === i ?
            (<img key={url} className="img" src={url} alt="wallpaper"/>)
            : null
        ))}
        
        <button className="btn" onClick={handleClickNext}>Next</button>
        </>
    )
}

export default ImageSlider