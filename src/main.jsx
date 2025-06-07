import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Suspense, lazy } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './index.css'

const App = lazy(() => import('./pages/App/App'))
const Menu = lazy(() => import('./pages/Menu/Menu'))
const Inicio = lazy(() => import('./pages/Inicio/Inicio'))
const Nosotros = lazy(() => import('./pages/Nosotros/Nosotros'))
const Contacto = lazy(() => import('./pages/Contacto/Contacto'))
const NotFound = lazy(() => import('./pages/notFound/No_Encontrado'))

export default function RouterComponent() {
  return (
    <>
      <Router>
      <App />
        <Suspense
          fallback={
            <div
              className='grid place-items-center min-h-screen text-neonCyan text-3xl'>Cargando pagina...</div>
          }>
          <Routes>
            <Route path='/' element={<Inicio />} />
            <Route path='Menu' element={<Menu />} />
            <Route path='Contacto' element={<Nosotros />} />
            <Route path='Nosotros' element={<Contacto />} />
            <Route path='*' element={<NotFound />} />
          </Routes>
        </Suspense>
      </Router>
    </>
  )
}

const root = createRoot(document.getElementById('root'))
root.render(
  <StrictMode>
    <RouterComponent />
  </StrictMode>,
)
