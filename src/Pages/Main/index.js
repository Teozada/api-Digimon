import React,{useEffect,useState} from 'react'
import {Link} from 'react-router-dom'
import {MainStyle,MainInput} from './style'
import api from '../../services/api'
import { MdSearch } from 'react-icons/md'

export default function Main(){
  const[digimons,setDigimons] = useState([])
  const[resultText,setResultText] = useState('')
  const[resultArray,setResultArray] = useState([])

  useEffect(()=>{
    const result = digimons.filter(
      digimon=>digimon.name.toLowerCase().includes(resultText)
    )

      resultText === '' ? setResultArray(digimons) : setResultArray(result)

    setResultArray(result)
  },[resultText])

  useEffect(()=>{
    resultText === '' && setResultArray(digimons)
  })

  useEffect(()=>{
    async function loadDigimons(){
      const response = await api.get('/digimon')

      setDigimons(response.data)
    }

    loadDigimons();
  },[])




  return(
   <MainStyle>

     <MainInput>

      <MdSearch/>

     <input 
      value={resultText}
      onChange={e=>setResultText(e.target.value)}  
      placeholder="Digite o pokemon"  
     />

      </MainInput>

     <section>
      {resultArray.map(item=>
      <Link to={`/${item.name}`}>
        <div>
           <img src={item.img} />
         </div>
      </Link>
        )}
     </section>
   </MainStyle>
  )
}