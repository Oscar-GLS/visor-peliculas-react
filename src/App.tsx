import { Route, Routes } from "react-router-dom"
import { HomePage, MovieDetailPage, FavoritesPage } from "./pages"
import "./assets/styles";
import { BarNav } from "./components/Header/BarNav";
import { useState } from "react";

function App() {
  const [filtro, setFiltro] = useState<string>("");

  const actualizarPalabraFiltrada = (word:string)=>{
      setFiltro(word);
  }

  return (
    <>
      <BarNav actualizarPalabraFiltrada={actualizarPalabraFiltrada}/>
      <Routes>
        <Route path="/" element={<HomePage filtro={filtro}/>}/>
        <Route path="/pelicula/:id" element={<MovieDetailPage/>}/>
        <Route path="/favoritos" element={<FavoritesPage/>}/>
      </Routes>
    </>
    
  )
}

export default App
