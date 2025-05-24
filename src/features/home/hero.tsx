import { Button } from '@/shared/ui/kit/button'

export function Hero() {
  return (
    <section className='flex flex-end relative overflow-hidden'>
      <div className='flex flex-col text-[25px] mt-24 ml-[18px]'>
        <p className='w-[312px] font-medium mb-7'>
          Доставка готовой еды <br /> из фермерских <br />{' '}
          продуктов!
        </p>
        <img
          src='/images/home/dots-sheet.svg'
          alt='dots'
          className='w-[184px] h-[184px] mb-7 relative -left-20 overflow-hidden'
        />
        <p className='font-medium mb-2'>+7 (499) 841-67-29</p>
        <p className='font-medium text-[18px]'>
          delivery@midas.rest
        </p>
      </div>
      <div className='flex mb-96 relative'>
        <img
          src='/images/home/home-main.png'
          alt='main-img'
          className='w-[1170px] h-[680px] relative -right-20'
        />
        <img
          src='/images/home/dots-sheet-lg.svg'
          alt='dots'
          className='w-[364px] h-[364px] absolute -bottom-65 -right-45'
        />

        <div className='flex mx-auto w-[355px] h-[355px] absolute -bottom-35 left-37 bg-[url(/images/home/card-bg.svg)] bg-cover'>
          <div className='flex flex-col gap-2 mx-auto justify-center font-medium'>
            <p className='text-[25px]/7 w-[220px]'>
              Стейк из лосося с овощами
            </p>
            <p className='text-[13px]'>250г</p>
            <p className='text-[15px] w-[230px] mb-6'>
              Нежный стейк дикого лосося, пропитанный соком и
              ароматом слегка обжаренных фермерских овощей
            </p>
            <div className='flex gap-4'>
              <p className='text-[23px] font-extrabold'>
                1 200 P
              </p>
              <Button className='bg-amber-400 hover:bg-amber-600 cursor-pointer'>
                <img src='/images/icons/cart.svg' alt='cart' />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
