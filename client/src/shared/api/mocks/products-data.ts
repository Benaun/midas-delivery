interface IProduct {
  id: string
  image: string
  title: string
  weight: string
  description: string
  price: number
  isPromo: boolean
  category: 'hot' | 'cold' | 'drink' | 'bakery' | 'deserts'
}

export const popularProducts: IProduct[] = [
  {
    id: '1',
    image: '/images/dishes/adjarskiy.png',
    title: 'Хачапури по-аджарски',
    weight: '430',
    description:
      'Хачапури "Лодочка" с начинкой из расплавленного сыра сулугуни, яйца и масла.',
    price: 470,
    isPromo: false,
    category: 'hot'
  },
  {
    id: '2',
    image: '/images/dishes/hinkali-classik.png',
    title: 'Хинкали традиционные (6шт)',
    weight: '350',
    description:
      'Пряные хинкали с начинкой из ароматной баранины со специями.',
    price: 495,
    isPromo: false,
    category: 'hot'
  },
  {
    id: '3',
    image: '/images/dishes/hinkali-fried.png',
    title: 'Хинкали жаренные (6шт)',
    weight: '430',
    description:
      'Пряные хинкали с начинкой из ароматной баранины со специями.',
    price: 520,
    isPromo: false,
    category: 'hot'
  },
  {
    id: '4',
    image: '/images/dishes/lanch.png',
    title: 'Ланч низкокалорийный',
    weight: '450',
    description:
      'Греческий йогурт с ягодами, 3 хинкали традиционных, салат цезарь, пирожки с уткой, морс',
    price: 1148,
    isPromo: false,
    category: 'cold'
  },
  {
    id: '5',
    image: '/images/dishes/megrel.png',
    title: 'Хачапури по-мегрельски',
    weight: '430',
    description:
      'Невероятно ароматная лепёшка с сыром сулугуни внутри и снаружи',
    price: 490,
    isPromo: false,
    category: 'hot'
  },
  {
    id: '6',
    image: '/images/dishes/cutlet.png',
    title: 'Котлета с картофелем по-деревенски',
    weight: '430',
    description:
      'По семейному рецепту: нежнейшее рубленное мясо с экологически чистыми ферме... По-семейному рецепту: нежнейшее рубленное мясо с экологически чистыми ферме...',
    price: 350,
    isPromo: false,
    category: 'hot'
  },
  {
    id: '7',
    image: '/images/dishes/hinkali-classik-1.png',
    title: 'Хинкали традиционные (6шт)',
    weight: '350',
    description:
      'Пряные хинкали с начинкой из ароматной баранины со специями.',
    price: 495,
    isPromo: false,
    category: 'hot'
  },
  {
    id: '8',
    image: '/images/dishes/megrel-1.png',
    title: 'Хачапури по-мегрельски',
    weight: '430',
    description:
      'Невероятно ароматная лепёшка с сыром сулугуни внутри и снаружи',
    price: 490,
    isPromo: false,
    category: 'hot'
  },
  {
    id: '9',
    image: '/images/dishes/adjarskiy-1.png',
    title: 'Хачапури по-аджарски',
    weight: '430',
    description:
      'Хачапури "Лодочка" с начинкой из расплавленного сыра сулугуни, яйца и масла.',
    price: 470,
    isPromo: false,
    category: 'hot'
  },
  {
    id: '10',
    image: '/images/dishes/cutlet-1.png',
    title: 'Котлета с картофелем по-деревенски',
    weight: '430',
    description:
      'По семейному рецепту: нежнейшее рубленное мясо с экологически чистыми ферме... По-семейному рецепту: нежнейшее рубленное мясо с экологически чистыми ферме...',
    price: 350,
    isPromo: false,
    category: 'hot'
  },
  {
    id: '11',
    image: '/images/dishes/hinkali-fried-1.png',
    title: 'Хинкали жаренные (6шт)',
    weight: '430',
    description:
      'Пряные хинкали с начинкой из ароматной баранины со специями.',
    price: 520,
    isPromo: false,
    category: 'hot'
  },
  {
    id: '12',
    image: '/images/dishes/lanch-1.png',
    title: 'Ланч низкокалорийный',
    weight: '450',
    description:
      'Греческий йогурт с ягодами, 3 хинкали традиционных, салат цезарь, пирожки с уткой, морс',
    price: 1148,
    isPromo: false,
    category: 'cold'
  }
]
