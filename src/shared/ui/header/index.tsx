import { Link } from 'react-router-dom'

import { ROUTES } from '@/shared/model/routes'
import { useSession } from '@/shared/model/session'

import { navItems } from './data'

export function Header() {
  const { session, logout } = useSession()
  return (
    <header className='container mx-auto pt-[50px] pb-[44px]'>
      <div className='flex items-center justify-between mx-[18px]'>
        <Link to={ROUTES.HOME} className='cursor-pointer'>
          <img
            src={'/images/logo.svg'}
            alt='Logo'
            className='w-[169px] h-[30px]'
          />
        </Link>

        <nav className='flex gap-11'>
          {navItems.map(navItem => (
            <div key={navItem.title} className='flex'>
              <Link
                to={navItem.link}
                className='flex gap-1 text-lg items-center justify-center text-white hover:text-gray-400'
              >
                <p>{navItem.title.toUpperCase()}</p>
                {navItem.img ? (
                  <img
                    src={navItem.img}
                    className='w-[16px] h-[16px]'
                  />
                ) : (
                  <div></div>
                )}
              </Link>
            </div>
          ))}
        </nav>

        <div className='flex gap-10 text-white'>
          <button
            className='border-0 cursor-pointer'
            onClick={() => undefined}
          >
            {
              <img
                src='/images/icons/search.svg'
                className='w-[24px] h-[24px]'
              />
            }
          </button>
          {session ? (
            <>
              <button className='border-0 cursor-pointer'>
                <Link to={ROUTES.CART}>
                  {
                    <img
                      src='/images/icons/cart.svg'
                      className='w-[24px] h-[24px]'
                    />
                  }
                </Link>
              </button>
              <button
                onClick={() => logout()}
                className='hover:text-gray-400 text-2xl cursor-pointer'
              >
                Выйти
              </button>
            </>
          ) : (
            <button className='hover:text-gray-400 text-2xl cursor-pointer'>
              <Link to={ROUTES.LOGIN}>Войти</Link>
            </button>
          )}
        </div>
      </div>
    </header>
  )
}
