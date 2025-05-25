import { Link } from 'react-router-dom'

import { ROUTES } from '@/shared/model/routes'
import {
  Card,
  CardContent,
  CardTitle
} from '@/shared/ui/kit/card'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from '@/shared/ui/kit/carousel'

import { menuSliderItems } from './menu-slider-data'

export function MenuSlider() {
  // Рассчитываем базовую ширину для 6 элементов
  const itemWidth = 233 // ширина одного элемента
  const gap = 20 // отступ между элементами
  const containerWidth = `calc(${6 * itemWidth + 5 * gap}px)` // 6 элементов + 5 отступов

  return (
    <section className='container mx-[18px] w-full mb-[200px]'>
      <div className='flex flex-col gap-[37px]'>
        <div className='relative'>
          <Carousel
            opts={{
              align: 'start',
              slidesToScroll: 1,
              loop: true
            }}
            className='w-full overflow-visible relative'
          >
            <h1 className='font-medium text-[50px] lg:text-[80px] text-center mb-16'>
              Меню
            </h1>
            <CarouselPrevious className='absolute top-4 lg:right-30 right-25 w-[56px] h-[56px]' />
            <CarouselNext className='absolute top-4 lg:right-10 md:right-8 right-0 w-[56px] h-[56px]' />
            <CarouselContent
              className='ml-0 flex gap-[20px]'
              style={{ width: containerWidth }}
            >
              <CarouselItem className='basis-[233px]'>
                <Link to={ROUTES.PROMO}>
                  <Card className='w-[233px] h-[314px] bg-red-500 hover:bg-red-400'>
                    <CardContent className='w-full h-full flex flex-col justify-between items-center'>
                      <p className='text-[70px] text-black'>
                        30%
                      </p>
                      <div className='flex items-center gap-1'>
                        <p className='text-[20px]'>АКЦИИ</p>
                        <img
                          src='images/icons/fire.svg'
                          className='w-[18px] h-[18px]'
                          alt='Акции'
                        />
                      </div>
                      <p className='text-[70px] text-black'>
                        20%
                      </p>
                    </CardContent>
                  </Card>
                </Link>
              </CarouselItem>

              {menuSliderItems.map(menuSliderItem => (
                <CarouselItem
                  key={menuSliderItem.id}
                  className='basis-[233px]'
                >
                  <Card
                    className={`w-[233px] h-[314px] bg-cover hover:underline hover:opacity-50 cursor-pointer`}
                    style={{
                      backgroundImage: `url(${menuSliderItem.image})`
                    }}
                  >
                    <div className='w-full h-full'>
                      <CardContent className='w-full h-full flex items-center justify-center'>
                        <CardTitle className='font-medium text-[20px]'>
                          {menuSliderItem.title}
                        </CardTitle>
                      </CardContent>
                    </div>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>
      </div>
    </section>
  )
}
