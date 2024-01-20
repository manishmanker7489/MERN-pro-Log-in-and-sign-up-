import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import Signup from './SignUp'
import LogIn from './LogIn'



import { BrowserRouter , Routes , Route } from 'react-router-dom'
import Home from './home'




function App() {
  

  return (

    <BrowserRouter> 
      <Routes>
          <Route path='/register' element={ <Signup/>}  />
          <Route path='/login' element={ <LogIn/>}  />
          <Route path='/home' element={ <Home/> }  />
      </Routes>
    </BrowserRouter>

  )
}

export default App
