import type { MovieDetails } from "../../interfaces"
import { FavoriteMovieCard } from "./FavoriteMovieCard"

interface Props {
    favorites: MovieDetails[],
    removeFavorite: (movie:number)=>void
}

export const FavoriteMovieList = ({favorites, removeFavorite}:Props)=> {
    return (
        <div className="favorite-movies-container">
            {
                favorites.length !== 0 && favorites.map((fav)=>(
                    <FavoriteMovieCard
                        movie={fav}
                        removeFavorite={removeFavorite}
                    />
                ))
            }
        </div>
    )
}