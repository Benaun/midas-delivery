import { Link } from 'react-router-dom'

import { ROUTES } from '@/shared/model/routes'

import { footerNavItems } from './data'

export function Footer() {
  return (
    <footer className='container mx-auto pb-9 text-white'>
      <div className='flex flex-col mx-[18px]'>
        <div className='flex flex-col lg:flex-row lg:justify-between mb-9'>
          <div className='flex justify-between lg:gap-[30px] xl:gap-[118px] mb-[33px] lg:mb-0'>
            <Link to={ROUTES.HOME} className='cursor-pointer'>
              <img
                src={'/images/logo.svg'}
                alt='Logo'
                className='w-[135px] h-[24px]'
              />
            </Link>
            <div className='flex gap-[30px] xl:gap-[50px]'>
              {footerNavItems.map(footerNavItem => (
                <Link
                  to={footerNavItem.link}
                  key={footerNavItem.title}
                  className='underline cursor-pointer hover:text-gray-400'
                >
                  {footerNavItem.title}
                </Link>
              ))}
            </div>
          </div>

          <div className='flex items-end gap-7'>
            <p className='text-xl'>+7 (499) 841-67-29</p>
            <p className='text-[12px]'>delivery@midas.rest</p>
          </div>
        </div>
        <div className='border-b mb-7'></div>
        <div className='flex flex-col gap-[23px] lg:gap-0 lg:flex-row lg:items-center justify-between text-[12px]'>
          <p>© 2009–2019, ООО «MIDAS», официальный сайт</p>
          <div className='flex items-center gap-11'>
            <Link
              to={ROUTES.HOME}
              className='border-b cursor-pointer hover:text-gray-400'
            >
              Политика конфиденциальности и оферта
            </Link>
            <Link
              to={ROUTES.HOME}
              className='border-b cursor-pointer hover:text-gray-400'
            >
              Пользовательское соглашение
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
