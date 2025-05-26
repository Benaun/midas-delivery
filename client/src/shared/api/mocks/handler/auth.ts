import { HttpResponse, delay } from 'msw'

import { ApiSchemas } from '../../schema'
import { http } from '../http'
import {
  createRefreshTokenCookie,
  generateTokens,
  verifyToken
} from '../session'

const mockUsers: ApiSchemas['User'][] = [
  {
    id: '1',
    phone: '+79187922249'
  }
]

const userPasswords = new Map<string, string>()
userPasswords.set('+79187922249', '123456')

export const authHandlers = [
  http.post('/auth/login', async ({ request }) => {
    const body = await request.json()

    const user = mockUsers.find(u => u.phone === body.phone)
    const storedPassword = userPasswords.get(body.phone)

    await delay(1000)

    if (
      !user ||
      !storedPassword ||
      storedPassword !== body.password
    ) {
      return HttpResponse.json(
        {
          message: 'Неверный номер или пароль',
          code: 'INVALID_CREDENTIALS'
        },
        { status: 401 }
      )
    }

    const { accessToken, refreshToken } = await generateTokens({
      userId: user.id,
      phone: user.phone
    })

    return HttpResponse.json(
      {
        accessToken: accessToken,
        user
      },
      {
        status: 200,
        headers: {
          'Set-Cookie': createRefreshTokenCookie(refreshToken)
        }
      }
    )
  }),

  http.post('/auth/register', async ({ request }) => {
    const body = await request.json()

    await delay(1000)

    if (mockUsers.some(u => u.phone === body.phone)) {
      return HttpResponse.json(
        {
          message: 'Пользователь уже существует',
          code: 'USER_EXISTS'
        },
        { status: 400 }
      )
    }

    const newUser: ApiSchemas['User'] = {
      id: String(mockUsers.length + 1),
      phone: body.phone
    }

    const { accessToken, refreshToken } = await generateTokens({
      userId: newUser.id,
      phone: newUser.phone
    })

    mockUsers.push(newUser)
    userPasswords.set(body.phone, body.password)

    return HttpResponse.json(
      {
        accessToken: accessToken,
        user: newUser
      },
      {
        status: 201,
        headers: {
          'Set-Cookie': createRefreshTokenCookie(refreshToken)
        }
      }
    )
  }),
  http.post('/auth/refresh', async ({ cookies }) => {
    const refreshToken = cookies.refreshToken

    if (!refreshToken) {
      return HttpResponse.json(
        {
          message: 'Refresh token не найден',
          code: 'REFRESH_TOKEN_MISSING'
        },
        { status: 401 }
      )
    }

    try {
      const session = await verifyToken(refreshToken)
      const user = mockUsers.find(u => u.id === session.userId)

      if (!user) {
        throw new Error('User not found')
      }

      const { accessToken, refreshToken: newRefreshToken } =
        await generateTokens({
          userId: user.id,
          phone: user.phone
        })

      return HttpResponse.json(
        {
          accessToken,
          user
        },
        {
          status: 200,
          headers: {
            'Set-Cookie':
              createRefreshTokenCookie(newRefreshToken)
          }
        }
      )
    } catch (error) {
      console.error('Error refreshing token:', error)
      return HttpResponse.json(
        {
          message: 'Недействительный refresh token',
          code: 'INVALID_REFRESH_TOKEN'
        },
        { status: 401 }
      )
    }
  })
]
