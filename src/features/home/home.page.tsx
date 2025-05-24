import { Hero } from './hero'
import { Popular } from './popular'

function Home() {
  return (
    <main className='mx-auto text-white'>
      <Hero />
      <Popular />
    </main>
  )
}

export const Component = Home
