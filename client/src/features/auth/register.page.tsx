import { Link } from 'react-router-dom'

import { ROUTES } from '@/shared/model/routes'

import { AuthLayout } from './ui/auth-layout'
import { RegisterForm } from './ui/register-from'

function RegisterPage() {
  return (
    <AuthLayout
      form={<RegisterForm />}
      title='Регистрация'
      description='Введите номер и пароль для регистрации'
      footerText={
        <>
          Уже есть аккаунт?
          <Link
            to={ROUTES.LOGIN}
            className=' underline text-primary'
          >
            Войти
          </Link>
        </>
      }
    />
  )
}

export const Component = RegisterPage
