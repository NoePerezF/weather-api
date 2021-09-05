
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
    info:Info  | {}
}
const Card = ({info}:Props) => {
    
    const showInfo = info as  Info
    
   
    return (
        
        
        <main>
          <img src={showInfo.current.condition.icon} alt="" />
          <section>
          <p>Pais: {showInfo.location.country}</p>
          <p>Ciudad: {showInfo.location.name}</p>
          <p>Temperatura: {showInfo.current.temp_c}°C</p>
          <p>Nublado: {showInfo.current.cloud}%</p>
          <p>{showInfo.current.condition.text}</p>
          </section>
        </main>
    )
}

export default Card
