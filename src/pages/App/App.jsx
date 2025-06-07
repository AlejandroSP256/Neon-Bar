import { Link, Outlet } from 'react-router-dom';
import { faCocktail } from '@fortawesome/free-solid-svg-icons'
import { Icon } from '../../components/Icon'

function App() {

  const navBar = ["Menu", "Nosotros", "Contacto"];
  return (
    <>
      <div className='text-white bg-darkBg'>

        {/* Header */}
        <h1 className='text-4xl mb-2.5 font-bold font-cyber text-neonBlue lg:hidden'>Neon Bar {Icon(faCocktail)}</h1>
        <nav className='flex justify-between items-center max-lg:m-0 p-4 shadow-neon font-cyber'>
          <h1 className='lg:text-4xl font-bold text-neonBlue max-lg:hidden'>Neon Bar {Icon(faCocktail)}</h1>
          <ul className='flex gap-4'>
            <Link to={'/'}>
              <li
                className='text-1xl max-lg:text-mobile cursor-pointer hover:text-neonCyan transition'
              >
                Inicio
              </li>
            </Link>
            {navBar.map((link) => (
              <Link to={`/${link}`}>
                <li key={link}
                  className='text-1xl max-lg:text-mobile cursor-pointer hover:text-neonCyan transition'
                >
                  {link}
                </li>
              </Link>
            ))}
          </ul>
        </nav>
      </div>
    </>
  )
}

export default App
