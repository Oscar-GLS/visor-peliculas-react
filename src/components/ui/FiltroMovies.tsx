import { useState, type ChangeEvent } from "react"

interface Props {
    actualizarPalabraFiltrada: (word:string)=>void
}

export const FiltroMovies = ({actualizarPalabraFiltrada}:Props)=>{
    const [value, setValue] = useState<string>("");

    const actualizarValorInput = (e:ChangeEvent<HTMLInputElement>)=>{
        setValue(e.target.value)
    }

    return (
        <div className="filtro-movies">
            <input type="text" value={value} onChange={actualizarValorInput} />
            <button onClick={()=>actualizarPalabraFiltrada(value)}>Filtrar</button>
        </div>
    )
}