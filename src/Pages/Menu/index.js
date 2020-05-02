import React from 'react'
import {MenuStyled} from './style'
import {Link} from 'react-router-dom'

export default function Menu(){
  return(
    <MenuStyled>
      <Link to='/main'>Ir para o Main</Link>
    </MenuStyled>
  )
}