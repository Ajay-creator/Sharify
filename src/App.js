import React from 'react'

//components
import Home from './components/Home'
import Menu from './components/Menu'

//styles
import {GlobalStyle} from './GlobalStyle'

//css for fonts
import './index.css'

const App = () =>{
  return(
    <>
      <Menu/>
      <Home/>
      <GlobalStyle/>
        
    </>
  )
}

export default App;
