import { useNavigate } from 'react-router-dom'

import { rqClient } from '@/shared/api/instance'
import { ApiSchemas } from '@/shared/api/schema'
import { ROUTES } from '@/shared/model/routes'
import { useSession } from '@/shared/model/session'

export function useRegister() {
  const navigate = useNavigate()
  const session = useSession()
  const registerMutation = rqClient.useMutation(
    'post',
    '/auth/register',
    {
      onSuccess(data) {
        session.login(data.accessToken)
        navigate(ROUTES.HOME)
      }
    }
  )

  const register = (data: ApiSchemas['RegisterRequest']) => {
    registerMutation.mutate({ body: data })
  }

  const registerErrorMessage = registerMutation.isError
    ? registerMutation.error.message
    : undefined

  return {
    register,
    registerPending: registerMutation.isPending,
    registerErrorMessage
  }
}
