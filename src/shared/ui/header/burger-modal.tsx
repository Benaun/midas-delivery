import { Link } from 'react-router-dom'

import { ROUTES } from '@/shared/model/routes'

import { burgerItems } from './assets/data'

export function BurgerModal({
  onClose
}: {
  onClose: () => void
}) {
  return (
    <div
      className='w-full h-[713px] absolute top-25 left-0 bg-black opacity-95 z-10 xl:hidden'
      onClick={onClose}
    >
      <div className='flex flex-col lg:flex-row lg:pt-15 mx-5 gap-10 lg:gap-17'>
        <div className='flex w-full lg:w-[195px] lg:h-[291px]'>
          <Link
            to={ROUTES.PROMO}
            className='w-full bg-[#B70000] hover:bg-red-400 mt-10'
          >
            <div className='w-full h-full flex lg:flex-col justify-between items-center'>
              <p className='text-[70px] text-black'>30%</p>
              <div className='flex items-center gap-1'>
                <p className='text-[20px]'>АКЦИИ</p>
                <img
                  src='images/icons/fire.svg'
                  className='w-[18px] h-[18px]'
                  alt='Акции'
                />
              </div>
              <p className='text-[70px] text-black'>20%</p>
            </div>
          </Link>
        </div>
        <div className='w-full flex px-5 lg:justify-start lg:gap-20 justify-between text-white font-medium text-xl'>
          <div className='flex flex-col gap-6'>
            {burgerItems.slice(0, 5).map(item => (
              <Link
                className='flex items-center gap-6'
                key={item.id}
                to={item.link}
              >
                <img
                  src={item.img}
                  alt='item.title'
                  className='w-17 h-17'
                />
                <p>{item.title}</p>
              </Link>
            ))}
          </div>
          <div className='flex flex-col gap-6'>
            {burgerItems.slice(-3).map(item => (
              <Link
                className='flex items-center gap-6'
                key={item.id}
                to={item.link}
              >
                <img
                  src={item.img}
                  alt='item.title'
                  className='w-17 h-17'
                />
                <p>{item.title}</p>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
