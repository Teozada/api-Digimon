import React from 'react'
import {BrowserRouter,Switch,Route} from 'react-router-dom'
import Main from './Pages/Main'
import Menu from './Pages/Menu'
import Digimon from './Pages/Digimon'

export default function Routes(){
  return(
    <BrowserRouter>
    <Switch>

      <Route path='/' exact component={Menu}/>
      <Route path='/main' exact component={Main}/>
      <Route path='/:name' exact component={Digimon}/>

    </Switch>
    
    </BrowserRouter>
  ) 
}