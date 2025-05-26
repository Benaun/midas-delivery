import 'react-router-dom'

export const ROUTES = {
  HOME: '/',
  LOGIN: '/login',
  REGISTER: '/register',
  PROMO: '/promo',
  PROFILE: '/profile/:profileId',
  HOT_FOOD: '/hot-food',
  COLD_FOOD: '/cold-food',
  BAKERY: '/bakery',
  DESERTS: '/desserts',
  DRINKS: '/drinks',
  DELIVERY: '/delivery',
  CART: '/cart',
  REVIEW_FORM: '/review-form'
} as const

export type PathParams = {
  [ROUTES.PROFILE]: {
    profileId: string
  }
}

declare module 'react-router-dom' {
  interface Register {
    params: PathParams
  }
}
