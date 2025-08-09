import { ProductList } from '@/shared/ui/kit/product-list'

import { popularProducts } from '../../shared/api/mocks/products-data'

export function Popular() {
  return (
    <section className='container mx-[18px] w-full mb-18 xl:mb-36'>
      <div className='flex flex-col gap-[37px]'>
        <h1 className='font-medium text-[50px] xl:text-[80px] text-center'>
          Популярные блюда
        </h1>
        <ProductList products={popularProducts} />
      </div>
    </section>
  )
}
