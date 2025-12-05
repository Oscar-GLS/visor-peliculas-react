import { Link } from "react-router-dom"
import { FiltroMovies } from "../ui/FiltroMovies"

interface Props {
    actualizarPalabraFiltrada: (value:string)=>void
}

export const BarNav = ({actualizarPalabraFiltrada}:Props) => {
    return (
        <nav className="bar-navigation">
            <Link className="bn-inicio" to="/">Inicio</Link>
            <Link className="bn-favoritos" to="/favoritos">Ver favoritos</Link>
            <FiltroMovies actualizarPalabraFiltrada={actualizarPalabraFiltrada}></FiltroMovies>
        </nav>
    )
}