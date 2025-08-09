import { popularProducts } from '@/shared/api/mocks/products-data'
import { ProductList } from '@/shared/ui/kit/product-list'

const coldProducts = popularProducts.filter(
  product => product.category === 'cold'
)

function ColdFoodPage() {
  return <ProductList products={coldProducts} showSortControl />
}

export const Component = ColdFoodPage
