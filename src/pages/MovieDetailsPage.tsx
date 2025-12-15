import { useParams } from "react-router-dom"
import { useMovieDetailsByID } from "../hooks/useMovieApi";
import { useFavoritesContext } from "../context/FavoritesContext";
import { Loader, MovieDetailsCard } from "../components";

export const MovieDetailPage = () => {
    let {id} = useParams();
    const movieID = Number(id);

    const {data: movie, loading, error} = useMovieDetailsByID(movieID);
    const {addFavorite, removeFavorite, isFavorite} = useFavoritesContext();

    if(loading) {
        return (
            <Loader/>
        )
    }

    if(error) {
        return <h3>Ups, ha ocurrido un error</h3>
    }

    return (
        
        <div className="movie-details-interface"
            style={{
                    ["--bg-img" as any]: `url(${import.meta.env.VITE_BASE_URL_IMAGEN_POSTER_TMDB + "original" + movie?.backdrop_path})`
                }}
        >
            {
                movie !== null ? 
                <MovieDetailsCard
                    movie={movie}
                    addFavorite={addFavorite}
                    removeFavorite={removeFavorite}
                    isFavorite={isFavorite}
                /> :
                <div>Hubo un error</div>
            }
        </div>
    )
}