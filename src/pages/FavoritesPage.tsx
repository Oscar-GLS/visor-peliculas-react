import { Link } from "react-router-dom";
import { useFavoritesContext } from "../context/FavoritesContext"

export const FavoritesPage = () => {
    const {favorites} = useFavoritesContext();

    return (
        <ul>
            {
                favorites.length !== 0 && favorites.map((fav)=>(
                    <li key={fav.id}>
                        <span>{fav.id}</span>
                        <span>{fav.title}</span>
                        <span>{fav.vote_average}</span>
                        <Link to={`/pelicula/${fav.id}`}>Ver detalles</Link>
                    </li>
                ))
            }
        </ul>
    )
}