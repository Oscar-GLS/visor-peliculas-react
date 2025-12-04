import { Link, Route, Routes } from "react-router-dom"
import { HomePage, MovieDetailPage, FavoritesPage } from "./pages"

function App() {
  return (
    <>
      <nav>
        <Link to="/">Inicio</Link>
        <Link to="/favoritos">Ver favoritos</Link>
      </nav>
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/pelicula/:id" element={<MovieDetailPage/>}/>
        <Route path="/favoritos" element={<FavoritesPage/>}/>
      </Routes>
    </>
    
  )
}

export default App
