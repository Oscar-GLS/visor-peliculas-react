import { createContext, useContext, useEffect, useState, type ReactNode } from "react";
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

const FAVORITES_KEY = "favorites-key";

export const FavoritesProvider = ({children}:Props) => {
    const [favorites, setFavorites] = useState<MovieDetails[]>(()=>{
        try {
            const stored = localStorage.getItem(FAVORITES_KEY);
            return stored ? JSON.parse(stored) : [];
        } catch {
            return [];
        }
    });


    const addFavorite = (movie: MovieDetails) => {
        setFavorites(prev => 
            prev.some(fav => fav.id === movie.id) ? prev : [...prev, movie]
        );
    }

    const removeFavorite = (movieID: number) => {
        setFavorites(prev => prev.filter(movie => movie.id !== movieID));
    }

    const isFavorite = (movieID: number) : boolean => {
        return favorites.some(movie => movieID === movie.id);
    }

    useEffect(()=> {
        localStorage.setItem(FAVORITES_KEY,JSON.stringify(favorites));
    },[favorites])

    return(
        <FavoritesContext.Provider value={{favorites, addFavorite, removeFavorite, isFavorite}}>
            {children}
        </FavoritesContext.Provider>
    )
}