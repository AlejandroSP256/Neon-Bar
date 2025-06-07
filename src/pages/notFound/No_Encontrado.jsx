import { Link } from 'react-router-dom';
function NotFound() {
    return (
        <div className='grid place-items-center min-h-dvh'>
            <section
                className='flex-col justify-center items-center text-center
                text-neonCyan rounded-2xl font-naston mx-auto'
            >
                <h1 className='max-lg:text-4xl text-4xl'>404</h1>
                <h2 className='max-lg:text-2xl text-3xl'>Seccion no encontrada</h2>
                <p className='font-mono max-lg:w-xs w-2xl'>
                    Lo sentimos, el contenido de esta seccion no ha sido creado.
                    Por favor regrese a la seccion principal
                </p>
                <Link to={'/'}>
                    <button
                        className='text-neonBlue border cursor-pointer shadow-neon 
                        rounded-2xl mt-5 p-1 bg-neonPurple font-naston'
                    >
                        Regresar
                    </button>
                </Link>
            </section>
        </div>
    )
}
export default NotFound;
