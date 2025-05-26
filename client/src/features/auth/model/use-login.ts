import { useNavigate } from 'react-router-dom'

import { rqClient } from '@/shared/api/instance'
import { ROUTES } from '@/shared/model/routes'
import { useSession } from '@/shared/model/session'

export function useLogin() {
  const navigate = useNavigate()
  const session = useSession()
  const loginMutation = rqClient.useMutation(
    'post',
    '/auth/login',
    {
      onSuccess(data) {
        session.login(data.accessToken)
        navigate(ROUTES.HOME)
      }
    }
  )

  const login = (data: { phone: string; password: string }) => {
    loginMutation.mutate({ body: data })
  }

  const loginErrorMessage = loginMutation.isError
    ? loginMutation.error.message
    : undefined

  return {
    login,
    isLoginPending: loginMutation.isPending,
    loginErrorMessage
  }
}
