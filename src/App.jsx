import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home/Home'
import Unternehmen from './Pages/Unternehmen/Unternehmen'
import Services from './Pages/Services/Services'
import Fachgibeite from './Pages/Fachgibeite/Fachgibeite'
import Branchenexpertise from './Pages/Branchenexpertise/Branchenexpertise'

function App() {

  return (
    <>
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path='/unternehmen' element={<Unternehmen />} />
        <Route exact path='/services' element={<Services />} />
        <Route exact path='/fachgibeite' element={<Fachgibeite />} />
        <Route exact path='/branchenexpertise' element={<Branchenexpertise />} />
      </Routes>
    </>
  )
}

export default App
