import { Button } from '@/shared/ui/kit/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
} from '@/shared/ui/kit/card'

import { popularProducts } from './products-data'

export function Popular() {
  return (
    <section className='container mx-[18px] w-full mb-36'>
      <div className='flex flex-col gap-[37px]'>
        <h1 className='font-medium text-[80px] text-center'>
          Популярные блюда
        </h1>
        <div className='flex flex-wrap gap-[20px]'>
          {popularProducts.map(popularProduct => (
            <Card
              className='w-[233px] h-[444px] mb-5'
              key={popularProduct.id}
            >
              <CardHeader className='mb-4 overflow-hidden'>
                <img
                  src={popularProduct.image}
                  alt={popularProduct.title}
                  className='w-[230px] h-[233px]'
                />
              </CardHeader>
              <CardContent>
                <CardTitle className='font-medium text-[20px] mb-1'>
                  {popularProduct.title}
                </CardTitle>
                <CardDescription className='font-medium text-[13px]/5 h-[58px] overflow-hidden mb-[21px]'>
                  <p className='text-ellipsis'>
                    {popularProduct.description}
                  </p>
                </CardDescription>
              </CardContent>
              <CardFooter className='gap-[35px]'>
                <p className='font-extrabold text-[23px]'>
                  {popularProduct.price}
                </p>
                <Button className='bg-amber-400 hover:bg-amber-600 cursor-pointer'>
                  <img src='/images/icons/cart.svg' alt='cart' />
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
