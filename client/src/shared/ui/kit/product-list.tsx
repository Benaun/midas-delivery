import * as React from 'react'

import { IProduct } from '@/shared/api/mocks/products-data'
import { sortProducts } from '@/shared/lib/sortProducts'
import { Button } from '@/shared/ui/kit/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
} from '@/shared/ui/kit/card'
import {
  SortControl,
  SortOption
} from '@/shared/ui/sort-control'

interface ProductListProps {
  products: IProduct[]
  showSortControl?: boolean
  onAddToCart?: (product: IProduct) => void
}

export const ProductList: React.FC<ProductListProps> = ({
  products,
  showSortControl = false,
  onAddToCart
}) => {
  const [sortOption, setSortOption] =
    React.useState<SortOption>('price-asc')
  const sortedProducts = React.useMemo(
    () => sortProducts(products, sortOption),
    [products, sortOption]
  )

  return (
    <div className='container mx-auto px-4 py-8'>
      {showSortControl && (
        <SortControl
          sortOption={sortOption}
          setSortOption={setSortOption}
        />
      )}
      <div className='flex flex-wrap gap-[20px] text-white'>
        {sortedProducts.map(product => (
          <Card
            className='w-[233px] h-[444px] mb-5'
            key={product.id}
          >
            <CardHeader className='mb-4 overflow-hidden'>
              <img
                src={product.image}
                alt={product.title}
                className='w-[230px] h-[233px]'
              />
            </CardHeader>
            <CardContent>
              <CardTitle className='font-medium text-[20px] mb-1'>
                {product.title}
              </CardTitle>
              <CardDescription className='font-medium text-[13px]/5 h-[58px] overflow-hidden mb-[21px]'>
                <p className='text-ellipsis'>
                  {product.description}
                </p>
              </CardDescription>
            </CardContent>
            <CardFooter className='gap-[35px]'>
              <p className='font-extrabold text-[23px]'>
                {product.price}
              </p>
              <Button
                className='bg-amber-400 hover:bg-amber-600 cursor-pointer'
                aria-label='Добавить в корзину'
                tabIndex={0}
                onClick={() => onAddToCart?.(product)}
                onKeyDown={e => {
                  if (e.key === 'Enter' || e.key === ' ')
                    onAddToCart?.(product)
                }}
              >
                <img src='/images/icons/cart.svg' alt='cart' />
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  )
}
