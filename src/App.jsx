import { useState } from 'react'
import TreeUi from './TreeUi'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
      <div id='root'>
        <TreeUi height={1000} width={1000}></TreeUi>
      </div>
  )
}

export default App
