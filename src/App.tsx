import { useEffect } from "react"
import { getPopularMovies, getRatedMovies } from "./services/movieService"

function App() {

  useEffect(()=>{
    getPopularMovies()
    getRatedMovies()
  },[])

  return (
    <>
      
    </>
  )
}

export default App
