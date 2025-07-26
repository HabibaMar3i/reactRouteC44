import './App.css'
import About from './Components/About/About'
import Home from './Components/Home/Home'
import Contacts from './Components/Contacts/Contacts'
import State from './Components/State/State'
import Parent from './Components/Parent/Parent'
import { useState } from 'react'

function App() {
  const [age, setAge] = useState(23)

  return (
    <>
      <h1>Test app</h1>
      <h1 class="text-3xl font-bold underline bg-blue-100">
        Hello world!
      </h1>
      <Home />
      <About />
      <Contacts />
      <State />
      <Parent age={age}/>
    </>
  )
}

export default App
