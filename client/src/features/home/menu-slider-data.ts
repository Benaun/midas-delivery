import { ROUTES } from '@/shared/model/routes'

interface IMenuSliderItem {
  id: string
  image: string
  title: string
  link: string
}

export const menuSliderItems: IMenuSliderItem[] = [
  {
    id: '1',
    image: '/images/menu/hot.png',
    title: 'Горячие блюда',
    link: ROUTES.HOT_FOOD
  },
  {
    id: '2',
    image: '/images/menu/soup.png',
    title: 'Супы',
    link: ROUTES.HOT_FOOD
  },
  {
    id: '3',
    image: '/images/menu/hinkali.png',
    title: 'Хинкали',
    link: ROUTES.HOT_FOOD
  },
  {
    id: '4',
    image: '/images/menu/cold.png',
    title: 'Холодные закуски',
    link: ROUTES.COLD_FOOD
  },
  {
    id: '5',
    image: '/images/menu/salads.png',
    title: 'Салаты',
    link: ROUTES.COLD_FOOD
  },
  {
    id: '6',
    image: '/images/menu/salads.png',
    title: 'Салаты',
    link: ROUTES.COLD_FOOD
  },
  {
    id: '7',
    image: '/images/menu/salads.png',
    title: 'Салаты',
    link: ROUTES.COLD_FOOD
  }
]
