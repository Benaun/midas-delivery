import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from './kit/select'

interface ISortControlsProps {
  sortOption: SortOption
  setSortOption: (option: SortOption) => void
}

export type SortOption =
  | 'price-asc'
  | 'price-desc'
  | 'title-asc'
  | 'title-desc'

export function SortControl({
  sortOption,
  setSortOption
}: ISortControlsProps) {
  return (
    <div className='flex items-center gap-3 mb-7 font-medium text-sm text-white justify-end'>
      <span className='text-[#9EA2AA] uppercase'>
        Сортировать:
      </span>
      <Select
        value={sortOption}
        onValueChange={value =>
          setSortOption(value as SortOption)
        }
      >
        <SelectTrigger className='uppercase'>
          <SelectValue placeholder='Выберите сортировку' />
        </SelectTrigger>
        <SelectContent className='uppercase text-white z-10 bg-[#09234E]'>
          <SelectItem value='price-asc'>
            По возрастанию цены
          </SelectItem>
          <SelectItem value='price-desc'>
            По убыванию цены
          </SelectItem>
          <SelectItem value='title-asc'>
            По названию(А-Я)
          </SelectItem>
          <SelectItem value='title-desc'>
            По названию(Я-А)
          </SelectItem>
        </SelectContent>
      </Select>
    </div>
  )
}
