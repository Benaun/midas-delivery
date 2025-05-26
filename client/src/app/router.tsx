import { Outlet, createBrowserRouter } from 'react-router-dom'

import { ROUTES } from '@/shared/model/routes'
import { Footer } from '@/shared/ui/footer'
import { Header } from '@/shared/ui/header'

import App from './app'
import {
  ProtectedRoute,
  protectedLoader
} from './protected-route'
import { Providers } from './providers'

export const router = createBrowserRouter([
  {
    element: (
      <Providers>
        <App />
      </Providers>
    ),
    children: [
      {
        loader: protectedLoader,
        element: (
          <>
            <Header />
            <ProtectedRoute />
            <Footer />
          </>
        ),
        children: [
          {
            path: ROUTES.DELIVERY,
            lazy: () =>
              import('@/features/delivery/delivery.page')
          },
          {
            path: ROUTES.CART,
            lazy: () => import('@/features/cart/cart.page')
          },
          {
            path: ROUTES.REVIEW_FORM,
            lazy: () =>
              import('@/features/review-form/review-form.page')
          }
        ]
      },
      {
        element: (
          <>
            <Header />
            <Outlet />
            <Footer />
          </>
        ),
        children: [
          {
            path: ROUTES.HOME,
            lazy: () => import('@/features/home/home.page')
          },
          {
            path: ROUTES.PROMO,
            lazy: () => import('@/features/promo/promo.page')
          },
          {
            path: ROUTES.HOT_FOOD,
            lazy: () =>
              import('@/features/hot-food/hot-food.page')
          },
          {
            path: ROUTES.COLD_FOOD,
            lazy: () =>
              import('@/features/cold-food/cold-food.page')
          },
          {
            path: ROUTES.BAKERY,
            lazy: () => import('@/features/bakery/bakery.page')
          },
          {
            path: ROUTES.DESERTS,
            lazy: () => import('@/features/deserts/deserts.page')
          },
          {
            path: ROUTES.DRINKS,
            lazy: () => import('@/features/drinks/drinks.page')
          }
        ]
      },

      {
        path: ROUTES.LOGIN,
        lazy: () => import('@/features/auth/login.page')
      },
      {
        path: ROUTES.REGISTER,
        lazy: () => import('@/features/auth/register.page')
      }
    ]
  }
])
