import { Routes, Route } from 'react-router-dom'

import { Home, About, Services, Gallery, Asked, ServiceAreas } from "./components"

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element= {<Home />}/>
        <Route path="/about" element= {<About />}/>
        <Route path="/services" element= {<Services />}/>
        <Route path="/gallery" element= {<Gallery />}/>
        <Route path="/asked" element= {<Asked />}/>
        <Route path="/serviceAreas" element= {<ServiceAreas />}/>
      </Routes>
      <h1>Alfredo&apos;s Auto Body</h1>
    </>
  )
}

export default App
