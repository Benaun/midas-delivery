import { Link } from 'react-router-dom'

import { ROUTES } from '@/shared/model/routes'

import { AuthLayout } from './ui/auth-layout'
import { LoginForm } from './ui/login-from'

function LoginPage() {
  return (
    <AuthLayout
      form={<LoginForm />}
      title='Вход в систему'
      description='Введите номер и пароль для входа'
      footerText={
        <>
          Хотите создать аккаунт?
          <Link to={ROUTES.REGISTER} className='underline'>
            Зарегистрироваться
          </Link>
        </>
      }
    />
  )
}

export const Component = LoginPage
