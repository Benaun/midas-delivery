import { Button } from '@/shared/ui/kit/button'

export function Hero() {
  return (
    <section className='relative overflow-hidden flex flex-col lg:flex-row'>
      {/* Текстовая часть */}
      <div className='flex lg:flex-col text-lg md:text-xl lg:text-2xl mt-12 lg:mt-24 ml-4 lg:ml-[18px] w-full lg:w-auto'>
        <p className='w-[570px] lg:w-[312px] font-medium mb-4 lg:mb-7'>
          Доставка готовой еды <br /> из фермерских <br />{' '}
          продуктов!
        </p>

        <img
          src='/images/home/dots-sheet.svg'
          alt='dots'
          className='w-[120px] h-[120px] md:w-[150px] md:h-[150px] lg:w-[184px] lg:h-[184px] mb-4 lg:mb-7 lg:relative lg:-left-20 lg:top-0 xl:relative overflow-hidden absolute top-37 -left-8'
        />
        <div>
          <p className='font-medium mb-1 lg:mb-2 text-base md:text-lg lg:text-inherit'>
            +7 (499) 841-67-29
          </p>
          <p className='font-medium text-sm md:text-base lg:text-[18px]'>
            delivery@midas.rest
          </p>
        </div>
      </div>

      {/* Изображение и карточка */}
      <div className='flex relative mt-8 lg:mt-0 mb-40 md:mb-60 lg:mb-96 w-full justify-center lg:justify-end'>
        <img
          src='/images/home/home-main.png'
          alt='main-img'
          className='w-full max-w-[500px] md:max-w-[700px] lg:max-w-none lg:w-[1300px] h-auto lg:h-[632px]  relative lg:-right-20 xl:w-[1170px] xl:h-[680px]'
        />

        <img
          src='/images/home/dots-sheet-lg.svg'
          alt='dots'
          className='lg:block w-[364px] h-[364px] xl:w-[364px] xl:h-[364px] absolute -bottom-60 lg:-bottom-60 -right-10 lg:right-70 xl:-bottom-60 xl:right-0'
        />

        {/* Карточка с блюдом */}
        <div className='flex mx-auto w-[280px] h-[280px] md:w-[320px] md:h-[320px] lg:w-[355px] lg:h-[355px] absolute top-70 lg:top-120 left-1/3 transform -translate-x-1/2 lg:left-37 lg:transform-none bg-[url(/images/home/card-bg.svg)] bg-cover'>
          <div className='flex flex-col gap-1 md:gap-2 mx-auto justify-center font-medium p-4'>
            <p className='text-lg md:text-xl lg:text-[25px] lg:leading-7 w-full md:w-[220px]'>
              Стейк из лосося с овощами
            </p>
            <p className='text-xs md:text-[13px]'>250г</p>
            <p className='text-xs md:text-sm lg:text-[15px] w-full md:w-[230px] mb-2 md:mb-4 lg:mb-6'>
              Нежный стейк дикого лосося, пропитанный соком и
              ароматом слегка обжаренных фермерских овощей
            </p>
            <div className='flex gap-2 md:gap-4 items-center'>
              <p className='text-lg md:text-xl lg:text-[23px] font-extrabold'>
                1 200 P
              </p>
              <Button className='bg-amber-400 hover:bg-amber-600 cursor-pointer p-2 md:p-3'>
                <img
                  src='/images/icons/cart.svg'
                  alt='cart'
                  className='w-4 h-4 md:w-5 md:h-5'
                />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
