import { Link, useLocation } from "react-router-dom"
import { FiltroMovies } from "../ui/FiltroMovies"

interface Props {
    actualizarPalabraFiltrada: (value:string)=>void
}

export const BarNav = ({actualizarPalabraFiltrada}:Props) => {
    const location = useLocation();
    const currentPath = location.pathname;

    return (
        <nav className="bar-navigation">
            <Link className="bn-inicio" to="/">Inicio</Link>
            <Link className="bn-favoritos" to="/favoritos">Ver favoritos</Link>
            {
                currentPath == "/" ? 
                <FiltroMovies actualizarPalabraFiltrada={actualizarPalabraFiltrada}/> :
                <></>
            }
        </nav>
    )
}