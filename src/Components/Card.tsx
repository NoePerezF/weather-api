
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
interface Props{
    info:Info
}
const Card = ({info}:Props) => {
    
   
 
    
    
    return (
        
        
        <main>
          <img src={info.current.condition.icon} alt="" />
          <section>
          <p>Pais: {info.location.country}</p>
          <p>Ciudad: {info.location.name}</p>
          <p>Temperatura: {info.current.temp_c}°C</p>
          <p>Nublado: {info.current.cloud}%</p>
          <p>{info.current.condition.text}</p>
          </section>
        </main>
    )
}

export default Card
