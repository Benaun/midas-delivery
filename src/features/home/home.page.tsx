import { Link, href } from 'react-router-dom'

import { rqClient } from '@/shared/api/instance'
import { ROUTES } from '@/shared/model/routes'
import { Button } from '@/shared/ui/kit/button'
import {
  Card,
  CardFooter,
  CardHeader
} from '@/shared/ui/kit/card'

function Home() {
  const productsQuery = rqClient.useQuery('get', '/products')
  console.log(productsQuery.data?.list)
  return (
    <div className='container mx-auto p-4'>
      <h1>Home</h1>
      <div className='grid grid-cols-3 gap-4'>
        {productsQuery.data?.list.map(product => (
          <Card key={product.id}>
            <CardHeader>
              <Button asChild variant='link'>
                <Link
                  to={href(ROUTES.PROFILE, {
                    profileId: product.id
                  })}
                >
                  {product.title}
                </Link>
              </Button>
            </CardHeader>
            <CardFooter>
              <Button variant='destructive'>Delete</Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  )
}

export const Component = Home
