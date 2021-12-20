import { useState, React } from 'react'
import './App.css';
import About from "./pages/About";
import Achi from "./pages/Achi";
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import "./Layout";
import Layout from './Layout';
import Share from './pages/Share';
import Error from './pages/Error';
import Rie from './pages/Rie';
import { DiReact, DiCss3Full, DiJsBadge, } from "react-icons/di";



function App() {
  let time = new Date().toLocaleTimeString()
  const [ctime, setCtime] = useState(time)
  const UpdateTime = () => {
    time = new Date().toLocaleTimeString()
    setCtime(time)
  }
  setInterval(UpdateTime, 1000)
  

  return (
    
    <div className="App">
      <h4 style={({ color: "pink" })}>{ctime} - {new Date().toLocaleDateString()}</h4>
      <h1 >Bedirhan  KABATAŞ  <Share></Share><hr /> </h1>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout></Layout>}>
            <Route path="Achi" element={<Achi></Achi>}></Route>
            <Route path="About" element={<About></About>}></Route>
            <Route path="Rie" element={<Rie></Rie>}></Route>  
          </Route>
          <Route path="*" element={<Error></Error>}></Route>
        </Routes>
      </BrowserRouter>
      <div className='icon'>
        <a href="https://reactjs.org/" target="_blank" rel="noreferrer"><DiReact size="30px" color="yellow" /></a>&ensp;
        <a href="https://www.javascript.com/" target="_blank" rel="noreferrer"><DiJsBadge size="30px" color="yellow" /></a>&ensp;
        <a href="https://www.w3schools.com/css/" target="_blank" rel="noreferrer"><DiCss3Full size="30px" color="yellow" /></a>
      </div>
    </div>
  )
}

export default App
