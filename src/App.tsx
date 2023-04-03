import nodeLogo from './assets/node.svg'
import { useState } from 'react'
import Update from '@/components/update'
import './App.css'

console.log('[App.tsx]', `Hello world from Electron ${process.versions.electron}!`)

function App() {
  const [count, setCount] = useState(0)
  return (
    <p>Holaaa</p>
  )
}

export default App
