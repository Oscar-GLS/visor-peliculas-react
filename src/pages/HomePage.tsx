import { usePopularMovies } from "../hooks/useMovieApi";

const BASE_URL_IMAGEN_POSTER_TMDB = "https://image.tmdb.org/t/p/w300";

export const HomePage = () => {
    const [movies, loading, error] = usePopularMovies();
    
    if(loading) {
    return <h3>Cargando datos...</h3>
    }

    if(error) {
    return <h3>Ups, ha ocurrido un error</h3>
    }

    const showPopularMovies = () => {
    console.log(movies);
    }
    const showRatedMovies = () => {
    }

    return (
    <>
        <ul>
            {
                movies && movies.results.map((mov,i)=>(
                    <li key={i}>
                        <span>{mov.title}</span>
                        <img src={BASE_URL_IMAGEN_POSTER_TMDB+mov.poster_path} alt="" />
                    </li>
                ))
            }
        </ul>
    </>
    )
}