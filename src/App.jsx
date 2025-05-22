import React from 'react'
import Button from './components/Button'
import addIcon from './assets/add.webp'
import compressIcon from './assets/compress.png'
import mergeIcon from './assets/merge.webp'
import trimIcon from './assets/trim.webp'

const App = () => {
  return (
    <div className="min-h-screen bg-indigo-500 flex items-center justify-center">
      <div className="bg-gray-100 p-8 rounded-lg shadow-lg text-center">
        <div className='px-10 flex gap-10 justify-center items-center'>
          <Button text = "+" icon = {addIcon}></Button>
          <Button text = "Trim" icon = {trimIcon}></Button>
          <Button text = "Merge" icon = {mergeIcon}></Button>
          <Button text = "Compress" icon = {compressIcon}></Button>
        </div>
      </div>
    </div>
  )
}

export default App
