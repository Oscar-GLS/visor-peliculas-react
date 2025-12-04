import { Link, useParams } from "react-router-dom"
import { useDetailsMovieByID } from "../hooks/useMovieApi";
import { useFavoritesContext } from "../context/FavoritesContext";

export const MovieDetailPage = () => {
    let {id} = useParams();
    const movieID = Number(id);

    const {data: movie, loading, error} = useDetailsMovieByID(movieID);
    const {addFavorite, removeFavorite, isFavorite} = useFavoritesContext();

    if(loading) {
        return <h3>Cargando datos...</h3>
    }

    if(error) {
        return <h3>Ups, ha ocurrido un error</h3>
    }

    return (
        <ul>
            <img src={import.meta.env.VITE_BASE_URL_IMAGEN_POSTER_TMDB+movie?.poster_path} alt="" />
            <li>ID: {movie?.id}</li>
            <li>Titulo: {movie?.title}</li>
            <li>Reseña: {movie?.overview}</li>
            <li>Valoraciones: {movie?.vote_average}</li>
            <Link to="/">Volver</Link>
            {
                isFavorite(movieID) ?
                <button onClick={()=> movie && removeFavorite(movieID)}>Quitar de favoritos</button>
                :
                <button onClick={()=> movie && addFavorite(movie)}>Agregar como favorito</button>
            }
            
        </ul>
    )
}