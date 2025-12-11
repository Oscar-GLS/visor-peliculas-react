import { FavoriteMovieList } from "../components";
import { useFavoritesContext } from "../context/FavoritesContext"

export const FavoritesPage = () => {
    const {favorites,removeFavorite} = useFavoritesContext();

    return (
        <div className="favorite-movies-interface">
            <span className="favmovint-title">Peliculas Favoritas</span>
            <FavoriteMovieList 
                favorites={favorites}
                removeFavorite={removeFavorite}
            />
        </div>
    )
}