import { Outlet, useLocation } from 'react-router-dom'

function App() {
  const location = useLocation()
  const className =
    location.pathname === '/login' ||
    location.pathname === '/register'
      ? 'mx-auto w-full'
      : 'mx-auto w-full bg-gradient-to-br from-blue-600 to-black'
  return (
    <div className={className}>
      <Outlet />
    </div>
  )
}

export default App
