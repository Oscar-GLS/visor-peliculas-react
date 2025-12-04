import { useEffect, useState } from "react";
import { CardMovie } from "../components/Card/CardMovie";
import { FiltroMovies } from "../components/ui/FiltroMovies";
import { useMoviesByTitle, usePopularMovies } from "../hooks/useMovieApi";

export const HomePage = () => {
    const {data: movies, loading, error} = usePopularMovies();
    const [filtro, setFiltro] = useState<string>("");
    const {data: moviesByTitle} = useMoviesByTitle(filtro);
    
    useEffect(()=>{
        console.log(moviesToShow);
    },[filtro])

    if(loading) {
    return <h3>Cargando datos...</h3>
    }

    if(error) {
    return <h3>Ups, ha ocurrido un error</h3>
    }

    const actualizarPalabraFiltrada = (word:string)=>{
        setFiltro(word);
    }

    const moviesToShow = filtro.trim() !== "" ? moviesByTitle : movies; 

    

    return (
    <>
        <FiltroMovies actualizarPalabraFiltrada={(value)=>actualizarPalabraFiltrada(value)}></FiltroMovies>
        <CardMovie movies={moviesToShow}></CardMovie>
    </>
    )
}