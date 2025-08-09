import { z } from 'zod'

import { ROUTES } from '@/shared/model/routes'
import { AuthForm } from '@/shared/ui/kit/auth-form'

import { useRegister } from '../model/use-register'

const phoneRegex = /^(?:\+7|7|8)\d{10}$/
const registerSchema = z
  .object({
    phone: z
      .string({ required_error: 'Номер телефона обязателен' })
      .regex(phoneRegex, 'Неверно указан номер'),
    password: z
      .string({ required_error: 'Пароль обязателен' })
      .min(6, 'Пароль должен быть не менее 6 символов'),
    confirmPassword: z.string().optional()
  })
  .refine(data => data.password === data.confirmPassword, {
    path: ['confirmPassword'],
    message: 'Пароли не совпадают'
  })

const registerFields = [
  {
    name: 'phone',
    label: 'Телефон',
    placeholder: '+79997772233'
  },
  {
    name: 'password',
    label: 'Пароль',
    type: 'password',
    placeholder: '******'
  },
  {
    name: 'confirmPassword',
    label: 'Подтвердить пароль',
    type: 'password'
  }
]

export function RegisterForm() {
  const { register, registerErrorMessage, registerPending } =
    useRegister()
  return (
    <AuthForm
      fields={registerFields}
      schema={registerSchema}
      onSubmit={register}
      isPending={registerPending}
      errorMessage={registerErrorMessage}
      submitText='Зарегистрироваться'
      cancelText='Отменить'
      cancelHref={ROUTES.HOME}
    />
  )
}
