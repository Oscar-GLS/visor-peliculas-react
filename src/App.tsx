import { Link, Route, Routes } from "react-router-dom"
import { HomePage, MovieDetailPage, FavoritesPage } from "./pages"
import "./assets/styles";

function App() {
  return (
    <>
      <nav className="bar-navigation">
        <Link className="bn-inicio" to="/">Inicio</Link>
        <Link className="bn-favoritos" to="/favoritos">Ver favoritos</Link>
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
