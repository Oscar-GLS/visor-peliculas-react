import React from "react";
import type { PopularMovies } from "../../interfaces"
import { Link } from "react-router-dom";

interface Prop {
    movies: PopularMovies | null
}

export const CardMovie = React.memo(({movies}:Prop) => {
    return (
        <div className="movies-container">
            {
                movies && movies.results.map((mov)=>(
                    <Link to={`/pelicula/${mov.id}`} key={mov.id} className="movie">
                        <img className="movie-poster" src={import.meta.env.VITE_BASE_URL_IMAGEN_POSTER_TMDB+mov.poster_path} alt="Poster de la pelicula" />
                        <span className="movie-title">{mov.original_title}</span>
                    </Link>
                ))
            }
        </div>
    )
});