import { HttpResponse } from 'msw'

import { ApiSchemas } from '../../schema'
import { http } from '../http'

const products: ApiSchemas['Product'][] = [
  {
    id: 'product-1',
    title: 'Product 1',
    price: '10.00',
    image: 'https://example.com/image1.jpg',
    description: 'Description for Product 1',
    category: 'hot',
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
  },
  {
    id: 'product-2',
    title: 'Product 2',
    price: '15.00',
    image: 'https://example.com/image2.jpg',
    description: 'Description for Product 2',
    category: 'cold',
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
  }
]

export const productsHandlers = [
  http.get('/products', () => {
    return HttpResponse.json({ list: products })
  })
]
