import React from 'react'
import Button from './components/Button'
const App = () => {
  return (
    <div className='center'>
      Coda
      <div className='flex'>
        <Button text = "+"></Button>
        <Button text = "Trim"></Button>
        <Button text = "Merge"></Button>
        <Button text = "Compress"></Button>
      </div>
    </div>
  )
}

export default App
