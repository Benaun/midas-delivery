import { Hero } from './hero'
import { MenuSlider } from './menu-slider'
import { Popular } from './popular'

function Home() {
  return (
    <main className='mx-auto text-white'>
      <Hero />
      <Popular />
      <MenuSlider />
    </main>
  )
}

export const Component = Home
