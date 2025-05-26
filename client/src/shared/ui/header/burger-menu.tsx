import { cn } from '@/shared/lib/css'

import { Button } from '../kit/button'

import { BurgerModal } from './burger-modal'

export function BurgerMenu({
  className,
  onClick,
  isMenuVisible,
  setMenuIsVisible
}: {
  className: string
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void
  isMenuVisible: boolean
  setMenuIsVisible: React.Dispatch<React.SetStateAction<boolean>>
}) {
  const handleMenuToggle = () => {
    setMenuIsVisible(prev => !prev)
  }
  const handleClose = () => {
    setMenuIsVisible(false) // Скрыть модалку
  }
  return (
    <div className='flex flex-col text-sm'>
      {!isMenuVisible ? (
        <Button
          className={cn(
            'flex gap-3 items-center text-white',
            className
          )}
          onClick={handleMenuToggle}
        >
          <img
            src='/images/icons/burger-menu.png'
            alt='burger-menu'
            className='w-9 h-4'
          />
          <span>Меню</span>
        </Button>
      ) : (
        <Button
          className={cn(
            'flex gap-3 items-center text-amber-400',
            className
          )}
          onClick={onClick}
        >
          <img
            src='/images/icons/close.png'
            alt='burger-menu'
            className='w-7 h-7'
          />
          <span>Закрыть</span>
        </Button>
      )}

      {isMenuVisible && <BurgerModal onClose={handleClose} />}
    </div>
  )
}
