import { useMutation } from '@tanstack/react-query'
import { loginUser } from '../../../api/auth/loginUser.js'

export function useLogin() {
  return useMutation({
    mutationFn: loginUser,
    onSuccess: (data) => {
      if (data?.token) {
        localStorage.setItem('authToken', data.token)
      }
    },
  })
}
