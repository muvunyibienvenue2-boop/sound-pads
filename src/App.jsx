import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Pads from './assets/pads.json'

function App() {
const [newArr,setNewArr] = useState(Pads);
  return (
    <>
      <div  className='pad-container'>
        {newArr.map((el,index) => (
          <button key={el.id} ></button>
        ))}
      </div>
    </>
  )
}

export default App
