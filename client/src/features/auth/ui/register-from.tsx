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

import { useRegister } from '../model/use-register'

const phoneRegex = /^(?:\+7|7|8)\d{10}$/

const registerSchema = z
  .object({
    phone: z
      .string({
        required_error: 'Номер телефона обязателен'
      })
      .regex(phoneRegex, 'Неверно указан номер'),
    password: z
      .string({
        required_error: 'Пароль обязателен'
      })
      .min(6, 'Пароль должен быть не менее 6 символов'),
    confirmPassword: z.string().optional()
  })
  .refine(data => data.password === data.confirmPassword, {
    path: ['confirmPassword'],
    message: 'Пароли не совпадают'
  })

export function RegisterForm() {
  const form = useForm({
    resolver: zodResolver(registerSchema)
  })

  const { register, registerErrorMessage, registerPending } =
    useRegister()

  const onSubmit = form.handleSubmit(register)
  return (
    <Form {...form}>
      <form className='flex flex-col gap-4' onSubmit={onSubmit}>
        <FormField
          control={form.control}
          name='phone'
          render={({ field }) => (
            <FormItem>
              <FormLabel>Телефон</FormLabel>
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
        <FormField
          control={form.control}
          name='confirmPassword'
          render={({ field }) => (
            <FormItem>
              <FormLabel>Подтвердить пароль</FormLabel>
              <FormControl>
                <Input {...field} type='password' />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        {registerErrorMessage && (
          <p className='text-red-500 text-sm'>
            {registerErrorMessage}
          </p>
        )}
        <div className='w-full flex justify-between'>
          <Button
            disabled={registerPending}
            type='submit'
            className='bg-black text-white w-5/9'
          >
            Зарегистрироваться
          </Button>
          <Button
            disabled={registerPending}
            type='submit'
            className='bg-black text-white w-3/9'
          >
            <Link to={ROUTES.HOME}>Отменить</Link>
          </Button>
        </div>
      </form>
    </Form>
  )
}
