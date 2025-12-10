import { FavoriteMovie } from "../components";
import { useFavoritesContext } from "../context/FavoritesContext"

export const FavoritesPage = () => {
    const {favorites,removeFavorite,isFavorite} = useFavoritesContext();

    return (
        <div className="favorite-movies-interface">
            <span className="favmovint-title">Peliculas Favoritas</span>
            <FavoriteMovie 
            favorites={favorites}
            removeFavorite={removeFavorite}
            isFavorite={isFavorite}
            />
        </div>
    )
}