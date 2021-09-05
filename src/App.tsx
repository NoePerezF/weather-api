
import Card from './Components/Card';
import Search from './Components/Search';
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
} | {}
}

function App() {
  const init:Info = {location:{name:"",country:'ini',lat:0},current:{cloud:0,condition:{text:"",icon:""},temp_c:0}}
  const [info, setinfo] = useState<Info | {}>(init || {})
  const [actualLocation, setactualLocation] = useState<boolean>(true)
  useEffect(() => {
    const getInfo = async() =>{
         const response = await fetch('https://api.weatherapi.com/v1/current.json?key=0bf5ab4102624edf8c3213106210109&q=auto:ip&lang=es', { method: 'GET',
         mode: 'cors', // <---
         cache: 'default'
      })
         const json:Info = await response.json()
         
         
         await setinfo(json)
         
         
         
    }
  getInfo()
   
    
    
    
},[])
  return (
    <>
    <Search setInfo = {setinfo} setactualLocation={setactualLocation}></Search>
    {Object.keys(info).length === 0 ? <h1>No se encontraron resultados</h1> : actualLocation ?<> <h1>Ubicacion actual</h1><Card info={info}></Card></>:
    <Card info={info}></Card>}
    
    
    </>
  );
}

export default App;
