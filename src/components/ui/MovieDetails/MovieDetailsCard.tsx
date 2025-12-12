import { Link } from "react-router-dom"
import type { MovieDetails } from "../../../interfaces"

interface Props {
    movie: MovieDetails,
    addFavorite: (movie: MovieDetails)=>void,
    removeFavorite: (movieID: number)=>void,
    isFavorite: (movieID: number)=>boolean
}

export const MovieDetailsCard = ({movie,addFavorite,removeFavorite,isFavorite}:Props) => {
    return (
        <div className="movie-details-container">
            <div className="md-image-container">
                <img className="md-image" src={import.meta.env.VITE_BASE_URL_IMAGEN_POSTER_TMDB+"w342"+movie?.poster_path} alt="" />
            </div>
            <div className="md-informacion-container">
                <div className="md-info-header">
                    <div className="md-info-title-container">
                        <div className="md-info-title-top">
                            <span className="md-info-title">{movie.title}</span>
                            <span className="md-info-releasedate">
                                {
                                `(${movie.release_date.slice(0, 4)})`
                                }
                            </span>
                        </div>
                        <div className="md-info-title-bottom">
                            <span className="md-info-releasedate">{movie.release_date}</span>
                            <span className="md-info-genres">
                                {
                                    movie.genres.map(gen => gen.name).join(", ")
                                }
                            </span>
                            <span className="md-info-runtime">{movie.runtime}min</span>
                        </div>
                    </div>
                    <div className="md-info-vote-container">
                        <span>{movie.vote_average.toFixed(1)}</span>
                    </div>
                </div>
                <div className="md-info-body">
                    <div className="md-info-tagline">{movie.tagline}</div>
                    <div>Overview</div>
                    <div className="md-info-overview">{movie.overview}</div>
                </div>
                <div className="md-info-footer">
                    <div className="md-buttons-container">
                        <Link className="md-btns-volver" to="/">Volver</Link>
                        {
                            isFavorite(movie.id) ?
                            <button className="md-btns-quitar-fav" onClick={()=> movie && removeFavorite(movie.id)}>Quitar de favoritos</button>
                            :
                            <button className="md-btns-agregar-fav" onClick={()=> movie && addFavorite(movie)}>Agregar como favorito</button>
                        }
                    </div>
                </div>    
            </div>
        </div>
    )
}