import React from 'react'
import {MenuStyled} from './style'
import {Link} from 'react-router-dom'

export default function Menu(){
  return(
    <MenuStyled>
      <img src="https://i.pinimg.com/originals/ca/5b/a7/ca5ba7d121989a03a9e22518a3ccaab1.png" />
      <Link to="/main">Você está pronto?</Link>
    </MenuStyled>
  )
}