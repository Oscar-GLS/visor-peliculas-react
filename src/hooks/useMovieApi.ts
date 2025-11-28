import { useEffect, useState } from "react"
import { getPopularMovies } from "../services/movieService";

export const usePopularMovies = () => {
    const [movies, setMovies] = useState();
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<Error | null>();

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