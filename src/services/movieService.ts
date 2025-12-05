interface Props {
    remainingUrl: string;
    method: string;
}

const getPreFetchData = ({remainingUrl, method}:Props) => {
    const url = `${import.meta.env.VITE_TMDB_BASE_URL+remainingUrl}`;
    const options = {
        method: method,
        headers: {
            accept: 'application/json',
            Authorization: `Bearer ${import.meta.env.VITE_TMDB_API_KEY_AUTHORIZATION}`
        }
    };
    return [url, options] as const
}

export const getPopularMovies = async () => {
    const [url, options] = getPreFetchData({remainingUrl: "movie/popular?language=en-US&page=1", method: "GET"});
    try {
        const response = await fetch(url,options);
        if(!response.ok) throw new Error(`Error en la petición: ${response.status} ${response.statusText}`);
        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Sucedio un error en getPopularMovies"+error);
        throw error;
    }
}

export const getMoviesByTitle = async (title:string) => {
    const [url, options] = getPreFetchData({remainingUrl: `search/movie?query=${title}&include_adult=false&language=en-US&page=1`, method: "GET"});
    try {
        const response = await fetch(url,options);
        if(!response.ok) throw new Error(`Error en la petición: ${response.status} ${response.statusText}`);
        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Sucedio un error en getMoviesByTitle"+error);
        throw error;
    }
}

export const getDetailsMovieByID = async (id:number) => {
    const [url, options] = getPreFetchData({remainingUrl: `movie/${id}?language=en-US`, method: "GET"});
    try {
        const response = await fetch(url,options);
        if(!response.ok) throw new Error(`Error en la petición: ${response.status} ${response.statusText}`);
        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Sucedio un error en getDetailsMovieByID"+error);
        throw error;
    }
}