import loaderImg from '../../../assets/images/movie-loader.png'

export const Loader = () => {
    return (
        <div className="loader-container">
            <img className="loader" src={loaderImg} alt="Cargando contenido" />
        </div>
    )
}