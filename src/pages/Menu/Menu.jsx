import { faCocktail } from '@fortawesome/free-solid-svg-icons'
import { stock } from '../../components/constantes'
import { Icon } from '../../components/Icon'

export default function Menu() {
    return (
        <>
            <section className="py-10 px-4">
                <h3 className="text-3xl font-semibold text-center text-neonBlue mb-6 mx-auto">Nuestro menu {Icon(faCocktail)}</h3>
                <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
                    {stock.map((drink, index) => (
                        <div
                            key={index}
                            className="p-4 bg-[#1a1a1a] rounded-xl shadow-neon hover:scale-105 transition grid place-content-center"
                        >
                            <img src={drink.imagen} alt={drink.nombre} className='size-[20rem] rounded-4xl'/>
                            <h4 className="text-xl font-bold text-neonCyan mt-2.5">{drink.nombre}</h4>
                            <p className="text-gray-300 mt-1">{drink.descripcion}</p>
                        </div>
                    ))}
                </div>
            </section>
        </>
    )
}