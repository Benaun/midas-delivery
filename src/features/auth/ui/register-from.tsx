import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

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
          <p className='text-destructive text-sm'>
            {registerErrorMessage}
          </p>
        )}
        <Button disabled={registerPending} type='submit'>
          Зарегистрироваться
        </Button>
      </form>
    </Form>
  )
}
