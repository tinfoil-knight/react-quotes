import React, {useState} from 'react'
import './App.css'

const App = (props) => {

  // TODO: Prevent selection of same number twice in a row
  const [selected, setSelected] = useState(Math.floor(Math.random() * (props.quotes.length)))
  return (
    <div id = "container">
      <div class = "sidetext" id="_1">
        <div id="vertical"><a href="http://classics.mit.edu/Antoninus/meditations.html">Meditations</a></div>
      </div>
      <div id = "content">
        <p>{props.quotes[selected]}</p>
      </div>
      <div class = "sidetext" id = "_2">
        <button onClick={() => setSelected(Math.floor(Math.random() * (props.quotes.length)))}>&#10227;</button>
      </div>
    </div>
  )

}

export default App
