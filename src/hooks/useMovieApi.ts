import { useEffect, useState } from "react"
import { getMoviesByTitle, getPopularMovies } from "../services/movieService";
import type { Root } from "../interfaces"

type MovieHookResult = [
    Root | null,
    boolean,
    Error | null
]

export const usePopularMovies = (): MovieHookResult => {
    const [movies, setMovies] = useState<Root | null>(null);
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

export const useMoviesByTitle = (title:string): MovieHookResult => {
    const [movies, setMovies] = useState<Root | null>(null);
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