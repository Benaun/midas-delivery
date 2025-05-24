import { Outlet, useLocation } from 'react-router-dom'

function App() {
  const location = useLocation()
  const className =
    location.pathname === '/login' ||
    location.pathname === '/register'
      ? 'container mx-auto w-full font-main'
      : 'w-full bg-gradient-to-br from-blue-600 to-black font-main'
  return (
    <div className={className}>
      <div className='container mx-auto'>
        <Outlet />
      </div>
    </div>
  )
}

export default App
