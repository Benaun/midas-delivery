import { IProduct } from '@/shared/api/mocks/products-data'
import { SortOption } from '@/shared/ui/sort-control'

export function sortProducts(
  products: IProduct[],
  sortOption: SortOption
): IProduct[] {
  if (!products?.length) return []
  return [...products].sort((a, b) => {
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
}
