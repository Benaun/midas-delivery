import { Link, useNavigate } from 'react-router-dom'

import { ROUTES } from '@/shared/model/routes'
import { useSession } from '@/shared/model/session'

import { headerIcons, navItems } from './data'

export function Header() {
  const { session, logout } = useSession()
  const navigate = useNavigate()
  return (
    <header className='container mx-auto'>
      <div className='flex items-center justify-between mx-[18px] pt-[50px]'>
        <img
          src={'/images/logo.svg'}
          alt='Logo'
          className='w-[169px] h-[30px]'
        />

        <nav className='flex gap-11'>
          {navItems.map(navItem => (
            <div key={navItem.title} className='flex'>
              <a
                href={navItem.link}
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
              </a>
            </div>
          ))}
        </nav>

        <div className='flex gap-10 text-white'>
          {headerIcons.map(headerIcon => (
            <button
              key={headerIcon.img}
              className='border-0 cursor-pointer'
              onClick={() =>
                headerIcon.link
                  ? navigate(headerIcon.link)
                  : undefined
              }
            >
              {
                <img
                  src={headerIcon.img}
                  className='w-[24px] h-[24px]'
                />
              }
            </button>
          ))}
          {session ? (
            <button
              onClick={() => logout()}
              className='hover:text-gray-400 text-2xl cursor-pointer'
            >
              Выйти
            </button>
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
