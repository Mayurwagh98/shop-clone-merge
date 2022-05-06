import { useState } from 'react'
// import logo from './logo.svg'
import './App.css'
import {Shipping} from "./components/Shipping"
import {Navbar} from "./components/Navbar/Navbar"



function App() {
  // const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Navbar></Navbar>
      <Shipping></Shipping>
    </div>
  )
}

export default App