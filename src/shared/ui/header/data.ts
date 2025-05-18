import { ROUTES } from '@/shared/model/routes'

interface INavItem {
  id: string
  title: string
  link: string
  img?: string
  isActive: boolean
}

export const navItems: INavItem[] = [
  {
    id: '1',
    title: 'Акции',
    link: `${ROUTES.PROMO}`,
    img: '/images/icons/fire.svg',
    isActive: false
  },
  {
    id: '2',
    title: 'Горячее',
    link: `${ROUTES.HOT_FOOD}`,
    img: '/images/icons/arrow-down.svg',
    isActive: false
  },
  {
    id: '3',
    title: 'Холодное',
    link: `${ROUTES.COLD_FOOD}`,
    img: '/images/icons/arrow-down.svg',
    isActive: false
  },
  {
    id: '4',
    title: 'Свежая выпечка',
    link: `${ROUTES.BAKERY}`,
    isActive: false
  },
  {
    id: '5',
    title: 'Десерты',
    link: `${ROUTES.DESERTS}`,
    isActive: false
  },
  {
    id: '6',
    title: 'Напитки',
    link: `${ROUTES.DRINKS}`,
    isActive: false
  }
]

interface IHeaderIcon {
  id: string
  img: string
  link?: string
}

export const headerIcons: IHeaderIcon[] = [
  {
    id: '1',
    img: '/images/icons/search.svg'
  },
  {
    id: '2',
    img: '/images/icons/cart.svg',
    link: `${ROUTES.CART}`
  }
]
