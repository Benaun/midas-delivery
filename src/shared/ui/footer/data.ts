import { ROUTES } from '@/shared/model/routes'

interface IFooterNavItem {
  id: string
  title: string
  link: string
}

export const footerNavItems: IFooterNavItem[] = [
  {
    id: '1',
    title: 'Обратная связь',
    link: `${ROUTES.HOME}`
  },
  {
    id: '2',
    title: 'Доставка',
    link: `${ROUTES.HOME}`
  },
  {
    id: '3',
    title: 'Оплата',
    link: `${ROUTES.HOME}`
  },
  {
    id: '4',
    title: 'Контакты',
    link: `${ROUTES.HOME}`
  }
]
