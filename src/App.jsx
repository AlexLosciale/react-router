import { BrowserRouter, Routes, Router } from "react-router-dom"

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Router path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
