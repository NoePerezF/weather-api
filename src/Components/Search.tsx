import {useRef} from 'react'
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
interface Props{
    setInfo:(info:Info | {} ) => void
    setactualLocation:(value:boolean) => void
}
const Search = ({setInfo,setactualLocation}:Props) => {

    const refSearch = useRef<HTMLInputElement>(document.createElement("input"))
    const searchInfo = async (e:React.FormEvent<HTMLFormElement>) =>{
        e.preventDefault()
        const baseUrl = 'https://api.weatherapi.com/v1/current.json?key=0bf5ab4102624edf8c3213106210109&q='
        const query = refSearch.current.value
        const url = baseUrl + query + '&lang=es'
        const response = await fetch(url,{ method: 'GET',
        mode: 'cors', // <---
        cache: 'default'
     })
        const json = await response.json()
        response.ok ? 
        
        //const json = await response.json()
       
        setInfo(json) :
        setInfo({})
        //console.log(json);
        
        refSearch.current.value = ""
        setactualLocation(false)
    }
    return (
        <form onSubmit={searchInfo} id="search">
            <input type="text" placeholder="London" ref = {refSearch} /><button>Buscar</button>
        </form>
    )
}

export default Search
