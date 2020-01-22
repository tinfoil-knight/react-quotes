import React, {useState} from 'react'
import './App.css'

const App = (props) => {

  // TODO: Prevent selection of same number twice in a row
  const [selected, setSelected] = useState(Math.floor(Math.random() * (props.quotes.length)))
  return (
    <div id = "container">
      <div className = "sidetext" id="_1">
        <div id="vertical"><a href="http://classics.mit.edu/Antoninus/meditations.html">Meditations</a></div>
      </div>
      <div id = "content">
        <p>{props.quotes[selected]}</p>
      </div>
      <div className = "sidetext" id = "_2">
        <button onClick={() => setSelected(Math.floor(Math.random() * (props.quotes.length)))}>&#62;</button>
      </div>
    </div>
  )

}

export default App
