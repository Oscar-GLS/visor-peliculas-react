import { CardMovie } from "../components/Card/CardMovie";
import { usePopularMovies } from "../hooks/useMovieApi";

export const HomePage = () => {
    const [movies, loading, error] = usePopularMovies();
    
    if(loading) {
    return <h3>Cargando datos...</h3>
    }

    if(error) {
    return <h3>Ups, ha ocurrido un error</h3>
    }

    return (
    <>
        <CardMovie movies={movies}></CardMovie>
    </>
    )
}