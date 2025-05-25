import { Link } from 'react-router-dom'

import { cn } from '@/shared/lib/css'

import { navItems } from './assets/data'

export function HeaderNav({ className }: { className: string }) {
  return (
    <nav className={cn('flex gap-11', className)}>
      {navItems.map(navItem => (
        <div key={navItem.title} className='flex'>
          <Link
            to={navItem.link}
            className='flex gap-1 2xl:text-[14px] lg:text-[10px] items-center justify-center text-white hover:text-gray-400'
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
  )
}
