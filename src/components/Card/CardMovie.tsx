import type { Root } from "../../interfaces"

interface Prop {
    movie: Root | null
}

export const CardMovie = ({movie}:Prop) => {
    return (
        <div>
            {
                movie && 
                <div>
                    <span>{movie.results[0].original_title}</span>
                </div>
            }
        </div>
    )
}