import { createContext, useContext, useState, type ReactNode } from "react";
import type { MovieDetails } from "../interfaces";

interface FavoritesContextProps {
    favorites: MovieDetails[];
    addFavorite: (movie: MovieDetails) => void;
    removeFavorite: (movieID: number) => void;
    isFavorite: (movieID: number) => boolean;
}

const FavoritesContext = createContext<FavoritesContextProps>({
    favorites: [],
    addFavorite: (_movie: MovieDetails) => {},
    removeFavorite: (_movieID: number) => {},
    isFavorite: (_movieID: number) => false,
});

export const useFavoritesContext = () => {return useContext(FavoritesContext)};

interface Props {
    children: ReactNode
}

export const FavoritesProvider = ({children}:Props) => {
    const [favorites, setFavorites] = useState<MovieDetails[]>([]);

    const addFavorite = (movie: MovieDetails) => {
        setFavorites((prevFavorites) => [...prevFavorites, movie]);
    }

    const removeFavorite = (movieID: number) => {
        setFavorites((prevFavorites) => prevFavorites.filter(movie => movie.id !== movieID));
    }

    const isFavorite = (movieID: number) : boolean => {
        return favorites.some(movie => movieID === movie.id);
    }

    return(
        <FavoritesContext.Provider value={{favorites, addFavorite, removeFavorite, isFavorite}}>
            {children}
        </FavoritesContext.Provider>
    )
}