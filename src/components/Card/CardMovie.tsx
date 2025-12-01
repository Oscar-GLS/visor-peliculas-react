import React from "react";
import type { Root } from "../../interfaces"

const BASE_URL_IMAGEN_POSTER_TMDB = "https://image.tmdb.org/t/p/w154";

interface Prop {
    movies: Root | null
}

export const CardMovie = React.memo(({movies}:Prop) => {
    return (
        <div className="movies-container">
            {
                movies && movies.results.map((mov)=>(
                    <div key={mov.id} className="movie">
                        <img className="movie-poster" src={BASE_URL_IMAGEN_POSTER_TMDB+mov.poster_path} alt="Poster de la pelicula" />
                        <span className="movie-title">{mov.original_title}</span>
                    </div>
                ))
            }
        </div>
    )
});