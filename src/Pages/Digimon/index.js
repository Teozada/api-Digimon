import React,{useEffect,useState} from 'react'
import {DigimonStyle,DigimonContainer} from './style'
import {Link} from 'react-router-dom'
import api from '../../services/api'
import { MdArrowBack } from 'react-icons/md'


export default function Digimon({match}){
  const[name,setName] = useState(match.params.name)
  const[digimon,setDigimon] = useState(null)

  useEffect(()=>{
    async function loadDigimon(){
      const response = await api.get(`/digimon/name/${name}`)

      setDigimon(response.data[0])
    }
    loadDigimon()
  },[])

  return(
    <DigimonStyle>

      <Link to='/main'>
        <MdArrowBack/>      
      </Link>

      {digimon !== null &&(       
        <DigimonContainer>

          <img src={digimon.img}/>
          <div>
          <label>Name:<span>{digimon.name}</span></label>
          <label>Training:<span>{digimon.level}</span></label>
          </div>

        </DigimonContainer>
      )}
    </DigimonStyle>
  )
}