import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'
import { z } from 'zod'

import { ROUTES } from '@/shared/model/routes'
import { Button } from '@/shared/ui/kit/button'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from '@/shared/ui/kit/form'
import { Input } from '@/shared/ui/kit/input'

import { useLogin } from '../model/use-login'

const phoneRegex = /^(?:\+7|7|8)\d{10}$/

const loginSchema = z.object({
  phone: z
    .string({
      required_error: 'Номер телефона обязателен'
    })
    .regex(phoneRegex, 'Неверно указан номер'),
  password: z
    .string({
      required_error: 'Пароль обязателен'
    })
    .min(6, 'Пароль должен быть не менее 6 символов')
})

export function LoginForm() {
  const form = useForm({
    resolver: zodResolver(loginSchema)
  })

  const { login, loginErrorMessage, isLoginPending } = useLogin()

  const onSubmit = form.handleSubmit(login)

  return (
    <Form {...form}>
      <form className='flex flex-col gap-4' onSubmit={onSubmit}>
        <FormField
          control={form.control}
          name='phone'
          render={({ field }) => (
            <FormItem>
              <FormLabel className='font-semibold'>
                Телефон
              </FormLabel>
              <FormControl>
                <Input placeholder='+79997772233' {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name='password'
          render={({ field }) => (
            <FormItem>
              <FormLabel>Пароль</FormLabel>
              <FormControl>
                <Input
                  placeholder='******'
                  {...field}
                  type='password'
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {loginErrorMessage && (
          <p className='text-red-500 text-sm'>
            {loginErrorMessage}
          </p>
        )}
        <div className='w-full flex justify-between'>
          <Button
            className='bg-black text-white w-4/9'
            disabled={isLoginPending}
            type='submit'
          >
            Войти
          </Button>
          <Button
            className='bg-black text-white w-4/9'
            disabled={isLoginPending}
            type='submit'
          >
            <Link to={ROUTES.HOME}>Назад</Link>
          </Button>
        </div>
      </form>
    </Form>
  )
}
