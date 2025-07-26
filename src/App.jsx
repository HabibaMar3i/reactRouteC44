import './App.css'
import About from './Components/About/About'
import Home from './Components/Home/Home'
import Contacts from './Components/Contacts/Contacts'
import State from './Components/State/State'

function App() {

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
    </>
  )
}

export default App
