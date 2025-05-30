import { useState } from 'react'

import { popularProducts } from '@/shared/api/mocks/products-data'
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

function ColdFoodPage() {
  const [sortOption, setSortOption] =
    useState<SortOption>('price-asc')

  const dishes = popularProducts
    .filter(product => product.category === 'cold')
    .sort((a, b) => {
      switch (sortOption) {
        case 'price-asc':
          return a.price - b.price
        case 'price-desc':
          return b.price - a.price
        case 'title-asc':
          return a.title.localeCompare(b.title)
        case 'title-desc':
          return b.title.localeCompare(a.title)
        default:
          return 0
      }
    })

  return (
    <div className='container mx-auto px-4 py-8'>
      <SortControl
        sortOption={sortOption}
        setSortOption={setSortOption}
      />
      <div className='flex flex-wrap gap-[20px] text-white'>
        {dishes.map(dish => (
          <Card
            className='w-[233px] h-[444px] mb-5'
            key={dish.id}
          >
            <CardHeader className='mb-4 overflow-hidden'>
              <img
                src={dish.image}
                alt={dish.title}
                className='w-[230px] h-[233px]'
              />
            </CardHeader>
            <CardContent>
              <CardTitle className='font-medium text-[20px] mb-1'>
                {dish.title}
              </CardTitle>
              <CardDescription className='font-medium text-[13px]/5 h-[58px] overflow-hidden mb-[21px]'>
                <p className='text-ellipsis'>
                  {dish.description}
                </p>
              </CardDescription>
            </CardContent>
            <CardFooter className='gap-[35px]'>
              <p className='font-extrabold text-[23px]'>
                {dish.price}
              </p>
              <Button className='bg-amber-400 hover:bg-amber-600 cursor-pointer'>
                <img src='/images/icons/cart.svg' alt='cart' />
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  )
}

export const Component = ColdFoodPage
