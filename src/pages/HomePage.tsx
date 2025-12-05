import { CardMovie } from "../components/Card/CardMovie";
import { useMoviesByTitle, usePopularMovies } from "../hooks/useMovieApi";

interface Props {
    filtro: string
}

export const HomePage = ({filtro}:Props) => {
    const {data: movies, loading, error} = usePopularMovies();
    const {data: moviesByTitle} = useMoviesByTitle(filtro);

    if(loading) {
    return <h3>Cargando datos...</h3>
    }

    if(error) {
    return <h3>Ups, ha ocurrido un error</h3>
    }
    
    const moviesToShow = filtro.trim() !== "" ? moviesByTitle : movies; 

    return (
    <>
        <CardMovie movies={moviesToShow}></CardMovie>
    </>
    )
}