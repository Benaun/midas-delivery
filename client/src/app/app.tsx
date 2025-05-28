import { Outlet, useLocation } from 'react-router-dom'

import { ROUTES } from '@/shared/model/routes'

function App() {
  const location = useLocation()
  const isAuthPage =
    location.pathname === ROUTES.LOGIN ||
    location.pathname === ROUTES.REGISTER

  return (
    <div
      className={
        isAuthPage
          ? 'container mx-auto w-full font-main'
          : 'w-full bg-gradient-to-br from-blue-600 to-black font-main'
      }
    >
      <div className='container mx-auto'>
        <Outlet />
      </div>
    </div>
  )
}

export default App
