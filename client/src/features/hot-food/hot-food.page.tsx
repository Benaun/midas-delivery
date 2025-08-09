import { popularProducts } from '@/shared/api/mocks/products-data'
import { ProductList } from '@/shared/ui/kit/product-list'

const hotProducts = popularProducts.filter(
  product => product.category === 'hot'
)

function HotFoodPage() {
  return <ProductList products={hotProducts} showSortControl />
}

export const Component = HotFoodPage
