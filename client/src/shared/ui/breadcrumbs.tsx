import { Link, useLocation } from 'react-router-dom'

const routes = [
  { path: '/', label: 'Главная' },
  { path: '/delivery', label: 'Доставка' },
  { path: '/cart', label: 'Корзина' },
  { path: '/review-form', label: 'Форма отзыва' },
  { path: '/promo', label: 'Промо' },
  { path: '/hot-food', label: 'Горячие блюда' },
  { path: '/cold-food', label: 'Холодная еда' },
  { path: '/bakery', label: 'Выпечка' },
  { path: '/deserts', label: 'Десерты' },
  { path: '/drinks', label: 'Напитки' }
]

export function Breadcrumbs() {
  const location = useLocation()

  const breadcrumbs = routes.filter(route =>
    location.pathname.startsWith(route.path)
  )

  const locationName = breadcrumbs[breadcrumbs.length - 1]

  if (breadcrumbs.length === 0) return null

  return (
    <div className='text-white font-medium px-[18px]'>
      <h1 className='text-[80px] mb-1.5'>
        {locationName.label}
      </h1>
      <ul className='flex p-0 list-none text-sm'>
        {breadcrumbs.map((item, index) => (
          <li key={item.path}>
            {location.pathname === item.path ? (
              <span className='text-gray-400 cursor-default'>
                {item.label}
              </span>
            ) : (
              <Link to={item.path}>{item.label}</Link>
            )}
            {index < breadcrumbs.length - 1 && (
              <span className='px-3'> / </span>
            )}
          </li>
        ))}
      </ul>
    </div>
  )
}
