import { Link } from "react-router-dom"
import type { MovieDetails } from "../../../interfaces"

interface Props {
    movie: MovieDetails,
    removeFavorite: (movie:number)=>void
}

export const FavoriteMovieCard = ({movie,removeFavorite}:Props) =>{
    return (
        <div className="favorite-movie" key={movie.id}>
            <img className="favmov-poster" src={import.meta.env.VITE_BASE_URL_IMAGEN_POSTER_TMDB+"w154/"+movie.poster_path} alt="Poster de la pelicula" />
            <div className="favmov-info-container">
                <div className="favmov-info-header">
                    <div className="favmov-info-puntuacion-container">
                        <span className="favmov-puntuacion">{(movie.vote_average).toFixed(1)}</span>
                    </div>
                    <div className="favmov-info-title-container">
                        <span className="favmov-title">{movie.title}</span>
                        <span className="favmov-fechalanz">{movie.release_date}</span>
                    </div>
                </div>
                <div className="favmov-info-body">
                    <span className="favmov-reseña">{movie.overview}</span>
                </div>
                <div className="favmov-info-footer">
                    <button className="favmov-btn-quitarfav" onClick={()=>removeFavorite(movie.id)}>Quitar favorito</button>
                    <Link className="favmov-btn-detalles" to={`/pelicula/${movie.id}`}>Ver detalles</Link>
                </div>
            </div>
        </div>
    )
}