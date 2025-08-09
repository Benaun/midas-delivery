import { z } from 'zod'

import { ROUTES } from '@/shared/model/routes'
import { AuthForm } from '@/shared/ui/kit/auth-form'

import { useLogin } from '../model/use-login'

const phoneRegex = /^(?:\+7|7|8)\d{10}$/
const loginSchema = z.object({
  phone: z
    .string({ required_error: 'Номер телефона обязателен' })
    .regex(phoneRegex, 'Неверно указан номер'),
  password: z
    .string({ required_error: 'Пароль обязателен' })
    .min(6, 'Пароль должен быть не менее 6 символов')
})

const loginFields = [
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
  }
]

export function LoginForm() {
  const { login, loginErrorMessage, isLoginPending } = useLogin()
  return (
    <AuthForm
      fields={loginFields}
      schema={loginSchema}
      onSubmit={login}
      isPending={isLoginPending}
      errorMessage={loginErrorMessage}
      submitText='Войти'
      cancelText='Назад'
      cancelHref={ROUTES.HOME}
    />
  )
}
