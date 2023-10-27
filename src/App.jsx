import { BrowserRouter, Routes, Route } from "react-router-dom"
import Movie from "./page/Movie"
import Home from "./page/Home"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path="movie" element={<Movie />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App