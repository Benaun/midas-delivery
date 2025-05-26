import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
} from '@/shared/ui/kit/card'

export function AuthLayout({
  form,
  title,
  description,
  footerText
}: {
  form: React.ReactNode
  title: React.ReactNode
  description: React.ReactNode
  footerText: React.ReactNode
}) {
  return (
    <main className='grow flex flex-col pt-[200px] items-center'>
      <Card className='w-full max-w-[400px] gap-6 rounded-xl border py-6 shadow-sm'>
        <CardHeader className='gap-1.5 px-6 [.border-b]:pb-6'>
          <CardTitle className='font-semibold'>
            {title}
          </CardTitle>
          <CardDescription>{description}</CardDescription>
        </CardHeader>
        <CardContent className='px-6'>{form}</CardContent>
        <CardFooter className='items-center px-6 [.border-t]:pt-6'>
          <p className='text-sm text-gray-400 [&_a]:underline [&_a]:text-green-400 [&_a]:pl-2'>
            {footerText}
          </p>
        </CardFooter>
      </Card>
    </main>
  )
}
