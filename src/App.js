import { useState } from 'react'
// import logo from './logo.svg'
//import './App.css'
import {Shipping} from "./components/Shipping"
import {Navbar} from "./components/Navbar/Navbar"
import { Address } from "./components/Address/Address";
import { Route, Routes } from "react-router-dom";
import { AddressDetails } from "./components/AddressDetails/AddressDetails";


function App() {
  // const [count, setCount] = useState(0)

  return (
    <div className="App">
      {/* <Navbar></Navbar> */}
      {/* <Shipping></Shipping> */}
      <Routes>
        <Route path="/" element={<Address />}></Route>
        <Route path="/addressdetails" element={<AddressDetails />}></Route>
      </Routes>
    </div>
  );
}

export default App
