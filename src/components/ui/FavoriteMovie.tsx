import { Link } from "react-router-dom"
import type { MovieDetails } from "../../interfaces"

interface Props {
    favorites: MovieDetails[],
    removeFavorite: (movie:number)=>void,
    isFavorite: (movie:number)=>boolean
}

export const FavoriteMovie = ({favorites, removeFavorite, isFavorite}:Props)=> {
    return (
        <div className="favorite-movies-container">
            {
                favorites.length !== 0 && favorites.map((fav)=>(
                    <div className="favorite-movie" key={fav.id}>
                        <img className="favmov-poster" src={import.meta.env.VITE_BASE_URL_IMAGEN_POSTER_TMDB+fav.poster_path} alt="Poster de la pelicula" />
                        <span className="favmov-puntuacion">{fav.vote_average}</span>
                        <span className="favmov-title">{fav.title}</span>
                        <span className="favmov-fechalanz">{fav.release_date}</span>
                        <span className="favmov-reseña">{fav.overview}</span>
                        <button className="favmov-btn-quitarfav" onClick={()=>removeFavorite(fav.id)}>Quitar favorito</button>
                        <Link className="favmov-btn-detalles" to={`/pelicula/${fav.id}`}>Ver detalles</Link>
                    </div>
                ))
            }
        </div>
    )
}