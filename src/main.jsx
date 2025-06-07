import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Suspense, lazy } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './index.css'
import NotFound from './pages/notFound/notFound'

const App = lazy(() => import('./pages/App/App'))
const Menu = lazy(() => import('./pages/Menu/Menu'))
const Inicio = lazy(() => import('./pages/Inicio/Inicio'))


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
