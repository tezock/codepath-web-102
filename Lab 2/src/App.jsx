import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import samosa from './samosa.png'

function App() {
  const [increment, setIncrement] = useState(1);
  const [count, setCount] = useState(0);

  const handleClick = () => {

    setCount(count + increment);
  }

  const handle2 = () => {

    if (count >= 10) {
      setIncrement(increment * 2);
      setCount(count - 10);
    }
    
  }

  const handle5 = () => {
    if (count >= 100) {
      setIncrement(increment * 5);
      setCount(count - 100);
    }
  }

  const handle10 = () => {
    if (count >= 1000) {
      setIncrement(increment * 10);
      setCount(count - 1000);
    }
  }

  return (
    <>

      <div className="body-container">

        <div classname="body-content">

          <div className="title-section">
            <h1>Samosa Selector</h1>
            <p>Count: {count}</p>
          </div>

          <button onClick={handleClick}><img src={samosa} /></button>


          <div className="buttons">
            <button onClick={handle2}>Double Stuffed</button>
            <button onClick={handle5}>Party Trick</button>
            <button onClick={handle10}>Full Feast</button>
          </div>

        </div>
      </div>
      
    </>
  )
}

export default App
