import { useEffect, useState } from "react"
import { getDetailsMovieByID, getMoviesByTitle, getPopularMovies } from "../services/movieService";
import type { PopularMovies, DetailsMovie } from "../interfaces"

type MoviesHookResult = [
    PopularMovies | null,
    boolean,
    Error | null
]

type DetailsMovieHook = [
    DetailsMovie | null,
    boolean,
    Error | null
]

export const usePopularMovies = (): MoviesHookResult => {
    const [movies, setMovies] = useState<PopularMovies | null>(null);
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<Error | null>(null);

    useEffect(()=>{
        setLoading(true);
        const fetchMovies = async () => {
            try {
                const data = await getPopularMovies();
                setMovies(data);
            } catch (error) {
                console.error("Sucedio un error en fetchMovies"+error)
                setError(error as Error);
                setLoading(false);
            } finally {
                setLoading(false);
            }
        }
        fetchMovies()
    },[])
    return [movies, loading, error];
}

export const useMoviesByTitle = (title:string): MoviesHookResult => {
    const [movies, setMovies] = useState<PopularMovies | null>(null);
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<Error | null>(null);

    useEffect(()=>{
        setLoading(true);
        const fetchMovies = async () => {
            try {
                const data = await getMoviesByTitle(title);
                setMovies(data);
            } catch (error) {
                console.error("Sucedio un error en fetchMovies"+error)
                setError(error as Error);
                setLoading(false);
            } finally {
                setLoading(false);
            }
        }
        fetchMovies()
    },[title])
    return [movies, loading, error];
}

export const useDetailsMovieByID = (id:number): DetailsMovieHook => {
    const [movie, setMovie] = useState<DetailsMovie | null>(null);
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<Error | null>(null);

    useEffect(()=>{
        setLoading(true);
        const fetchMovies = async () => {
            try {
                const data = await getDetailsMovieByID(id);
                setMovie(data);
            } catch (error) {
                console.error("Sucedio un error en fetchMovies"+error)
                setError(error as Error);
                setLoading(false);
            } finally {
                setLoading(false);
            }
        }
        fetchMovies()
    },[id])
    return [movie, loading, error];
}