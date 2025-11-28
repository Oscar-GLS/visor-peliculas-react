import { usePopularMovies } from "../hooks/useMovieApi";

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
        <button onClick={showPopularMovies}>Peliculas mas populares</button>
        <button onClick={showRatedMovies}>Peliculas mejor valoradas</button>
    </>
    )
}