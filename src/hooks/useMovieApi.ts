import { useCallback, useEffect, useState } from "react"
import { getMovieDetailsByID, getMoviesByTitle, getPopularMovies } from "../services/movieService";
import type { PopularMovies, MovieDetails } from "../interfaces"

interface AsyncReturn<T> {
    data: T | null;
    loading: boolean;
    error: Error | null;
}

interface Props<T> {
    asyncFunction: ()=>Promise<T>
}

export const useHookGeneric = <T,> ({asyncFunction}: Props<T>): AsyncReturn<T> => {
    const [data, setData] = useState<T | null>(null);
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<Error | null>(null);

    useEffect(()=>{
        setLoading(true);
        const fetchMovies = async () => {
            try {
                const data:T = await asyncFunction();
                setData(data);
            } catch (error) {
                console.error("Sucedio un error en fetchMovies"+error)
                setError(error as Error);
            } finally {
                setLoading(false);
            }
        }
        fetchMovies()
    },[asyncFunction])
    return {data, loading, error};
}

export const usePopularMovies = (): AsyncReturn<PopularMovies> => {
    const { data, loading, error } = useHookGeneric<PopularMovies>({asyncFunction: getPopularMovies});
    return { data, loading, error };
}

export const useMoviesByTitle = (title: string): AsyncReturn<PopularMovies> => {
    const fetchFn = useCallback(() => getMoviesByTitle(title), [title]);
    const { data, loading, error } = useHookGeneric<PopularMovies>({ asyncFunction: fetchFn });
    return { data, loading, error };
}

export const useMovieDetailsByID = (id: number): AsyncReturn<MovieDetails> => {
    const fetchFn = useCallback(() => getMovieDetailsByID(id), [id]);
    const { data, loading, error } = useHookGeneric<MovieDetails>({ asyncFunction: fetchFn });
    return { data, loading, error };
}

// export const usePopularMovies = (): MoviesHookResult => {
//     const [movies, setMovies] = useState<PopularMovies | null>(null);
//     const [loading, setLoading] = useState<boolean>(false);
//     const [error, setError] = useState<Error | null>(null);

//     useEffect(()=>{
//         setLoading(true);
//         const fetchMovies = async () => {
//             try {
//                 const data = await getPopularMovies();
//                 setMovies(data);
//             } catch (error) {
//                 console.error("Sucedio un error en fetchMovies"+error)
//                 setError(error as Error);
//                 setLoading(false);
//             } finally {
//                 setLoading(false);
//             }
//         }
//         fetchMovies()
//     },[])
//     return [movies, loading, error];
// }

// export const useMoviesByTitle = (title:string): MoviesHookResult => {
//     const [movies, setMovies] = useState<PopularMovies | null>(null);
//     const [loading, setLoading] = useState<boolean>(false);
//     const [error, setError] = useState<Error | null>(null);

//     useEffect(()=>{
//         setLoading(true);
//         const fetchMovies = async () => {
//             try {
//                 const data = await getMoviesByTitle(title);
//                 setMovies(data);
//             } catch (error) {
//                 console.error("Sucedio un error en fetchMovies"+error)
//                 setError(error as Error);
//                 setLoading(false);
//             } finally {
//                 setLoading(false);
//             }
//         }
//         fetchMovies()
//     },[title])
//     return [movies, loading, error];
// }

// export const useMovieDetailsByID = (id:number): MovieDetailsHook => {
//     const [movie, setMovie] = useState<MovieDetails | null>(null);
//     const [loading, setLoading] = useState<boolean>(false);
//     const [error, setError] = useState<Error | null>(null);

//     useEffect(()=>{
//         setLoading(true);
//         const fetchMovies = async () => {
//             try {
//                 const data = await getMovieDetailsByID(id);
//                 setMovie(data);
//             } catch (error) {
//                 console.error("Sucedio un error en fetchMovies"+error)
//                 setError(error as Error);
//                 setLoading(false);
//             } finally {
//                 setLoading(false);
//             }
//         }
//         fetchMovies()
//     },[id])
//     return [movie, loading, error];
// }