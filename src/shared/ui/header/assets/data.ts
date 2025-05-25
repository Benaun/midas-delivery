import { ROUTES } from '@/shared/model/routes'

interface IItem {
  id: string
  title: string
  link: string
  img?: string
}

interface INavItem extends IItem {
  isActive: boolean
}

type IHeaderIcon = Omit<IItem, 'title' | 'link'> & {
  link?: string
}

interface IBurgerItem extends IItem {
  id: string
  img: string
  title: string
  link: string
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

export const burgerItems: IBurgerItem[] = [
  {
    id: '1',
    img: '/images/burger/hot.png',
    title: 'Горячие блюда',
    link: ROUTES.HOT_FOOD
  },
  {
    id: '2',
    img: '/images/burger/soup.png',
    title: 'Супы',
    link: ROUTES.HOT_FOOD
  },
  {
    id: '3',
    img: '/images/burger/hinkali.png',
    title: 'Хинкали',
    link: ROUTES.HOT_FOOD
  },
  {
    id: '4',
    img: '/images/burger/cold.png',
    title: 'Холодные закуски',
    link: ROUTES.COLD_FOOD
  },
  {
    id: '5',
    img: '/images/burger/salad.png',
    title: 'Салаты',
    link: ROUTES.COLD_FOOD
  },
  {
    id: '6',
    img: '/images/burger/bake.png',
    title: 'Свежая выпечка',
    link: ROUTES.BAKERY
  },
  {
    id: '7',
    img: '/images/burger/desert.png',
    title: 'Десерты',
    link: ROUTES.DESERTS
  },
  {
    id: '8',
    img: '/images/burger/drink.png',
    title: 'Напитки',
    link: ROUTES.DRINKS
  }
]
