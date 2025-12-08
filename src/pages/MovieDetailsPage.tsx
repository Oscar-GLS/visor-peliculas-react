import { Link, useParams } from "react-router-dom"
import { useMovieDetailsByID } from "../hooks/useMovieApi";
import { useFavoritesContext } from "../context/FavoritesContext";

export const MovieDetailPage = () => {
    let {id} = useParams();
    const movieID = Number(id);

    const {data: movie, loading, error} = useMovieDetailsByID(movieID);
    const {addFavorite, removeFavorite, isFavorite} = useFavoritesContext();

    if(loading) {
        return <h3>Cargando datos...</h3>
    }

    if(error) {
        return <h3>Ups, ha ocurrido un error</h3>
    }

    return (
        <div className="movie-details-container">
            <div className="md-image-container">
                <img className="md-image" src={import.meta.env.VITE_BASE_URL_IMAGEN_POSTER_TMDB+movie?.poster_path} alt="" />
            </div>
            <div className="md-informacion-container">
                <span>ID: {movie?.id}</span>
                <span>Titulo: {movie?.title}</span>
                <span>Reseña: {movie?.overview}</span>
                <span>Valoraciones: {movie?.vote_average}</span>
                <div className="md-buttons-container">
                    <Link className="md-btns-volver" to="/">Volver</Link>
                    {
                        isFavorite(movieID) ?
                        <button className="md-btns-quitar-fav" onClick={()=> movie && removeFavorite(movieID)}>Quitar de favoritos</button>
                        :
                        <button className="md-btns-agregar-fav" onClick={()=> movie && addFavorite(movie)}>Agregar como favorito</button>
                    }
                </div>
                
            </div>
            
            
        </div>
    )
}