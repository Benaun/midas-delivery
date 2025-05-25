import { useState } from 'react'
import { Link } from 'react-router-dom'

import { ROUTES } from '@/shared/model/routes'
import { useSession } from '@/shared/model/session'

import { Button } from '../kit/button'

import { BurgerMenu } from './burger-menu'
import { HeaderNav } from './header-nav'

export function Header() {
  const { session, logout } = useSession()
  const [menuIsVisible, setMenuIsVisible] =
    useState<boolean>(false)
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

        <HeaderNav className='hidden xl:flex' />

        <BurgerMenu
          className='flex xl:hidden'
          onClick={() => setMenuIsVisible(prev => !prev)}
          isMenuVisible={menuIsVisible}
          setMenuIsVisible={setMenuIsVisible}
        />

        <div className='flex gap-10 text-white'>
          <Button
            className='border-0 cursor-pointer'
            onClick={() => undefined}
          >
            {
              <img
                src='/images/icons/search.svg'
                className='2xl:w-[24px] lg:w-[20px] 2xl:h-[24px] lg:h-[20px]'
              />
            }
          </Button>
          {session ? (
            <>
              <button className='border-0 cursor-pointer'>
                <Link to={ROUTES.CART}>
                  {
                    <img
                      src='/images/icons/cart.svg'
                      className='2xl:w-[24px] lg:w-[20px] 2xl:h-[24px] lg:h-[20px]'
                    />
                  }
                </Link>
              </button>
              <button
                onClick={() => logout()}
                className='hover:text-gray-400 2xl:text-[14px] lg:text-[12px] cursor-pointer'
              >
                Выйти
              </button>
            </>
          ) : (
            <button className='hover:text-gray-400 2xl:text-[14px] lg:text-[12px] cursor-pointer'>
              <Link to={ROUTES.LOGIN}>Войти</Link>
            </button>
          )}
        </div>
      </div>
    </header>
  )
}
