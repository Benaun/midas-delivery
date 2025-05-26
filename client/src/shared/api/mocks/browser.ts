import { setupWorker } from 'msw/browser'

import { authHandlers } from './handler/auth'
import { productsHandlers } from './handler/products'

export const worker = setupWorker(
  ...authHandlers,
  ...productsHandlers
)
