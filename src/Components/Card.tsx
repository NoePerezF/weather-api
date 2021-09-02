import { useState,useEffect } from 'react'
interface Info{
    location:{
        name:string
        country:string
        lat:number
    }
    current:{
        cloud:number
        condition:{
            text:string
            icon:string
        }
        temp_c:number
    }
    
}

const Card = () => {
    const init:Info = {location:{name:"",country:'ini',lat:0},current:{cloud:0,condition:{text:"",icon:""},temp_c:0}}
    const [info, setinfo] = useState<Info>(init)
 
    useEffect(() => {
        const getInfo = async() =>{
             const response = await fetch('https://api.weatherapi.com/v1/current.json?key=0bf5ab4102624edf8c3213106210109&q=auto:ip&lang=es', { method: 'GET',
             mode: 'cors', // <---
             cache: 'default'
          })
             const json:Info = await response.json()
             console.log(json);
             
             await setinfo(json)
             console.log(info);
             
             
        }
      getInfo()
       
        
        
        
    },[])
    
    return (
        
        
        <section>
          <img src={info.current.condition.icon} alt="" />
          <p>Pais: {info.location.country}</p>
          <p>Ciudad: {info.location.name}</p>
          <p>Temperatura: {info.current.temp_c}°C</p>
          <p>Nublado: {info.current.cloud}%</p>
          <p>{info.current.condition.text}</p>
        </section>
    )
}

export default Card
