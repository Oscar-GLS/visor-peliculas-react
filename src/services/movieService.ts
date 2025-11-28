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
        const data = await response.json();
        console.log(data);
        
    } catch (error) {
        
    }
}

export const getRatedMovies = async () => {
    const [url, options] = getPreFetchData({remainingUrl: "movie/top_rated", method: "GET"});
    try {
        const response = await fetch(url,options);
        const data = await response.json();
        console.log(data);
        
    } catch (error) {
        
    }
}