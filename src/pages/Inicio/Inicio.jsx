import { stock } from "../../components/constantes"

export default function Inicio() {
    return (
        <>
            {/* Hero Section */}
            <section className='text-center py-20'>
                <h2 className='text-5xl font-extrabold text-neonPurple drop-shadow-glow animate-pulse'>
                    Bienvenidos al Neon Bar
                </h2>
                <p className='text-neonCyan glow animate-pulse'>Un lugar con sabor, ritmo y luces que vibran contigo</p>
            </section>

            {/* Menu */}
            <section className='py-10 px-4'>
                <h3 className='text-3xl font-semibold text-center text-neonBlue mb-6 mx-auto'>Nuestro menu</h3>
                <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto'>
                    {stock.map((drink, index) => (
                        <div key={index} className='p-4 bg-[#1a1a1a] rounded-b-xl shadow-neon hover:scale-105 transition'>
                            <h4 className='text-xl font-bold text-neonCyan'>{drink.nombre}</h4>
                            <p className='text-gray-300 mt-2'>{drink.descripcion}</p>
                        </div>
                    ))}
                </div>
            </section>


            {/* Footer */}
            <footer className='py-6 text-center text-neonPurple mt-20'>
                <hr className='border shadow-neon border-neonCyan animate-pulse mb-8' />
                © 2025 Neon Bar. Luces, musica y buena vibra.
            </footer>
        </>
    )
}