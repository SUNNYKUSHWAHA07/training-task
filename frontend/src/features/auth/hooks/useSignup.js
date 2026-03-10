import { useMutation } from '@tanstack/react-query'
import { signupUser } from '../../../api/auth/signupUser.js'

export function useSignup() {
  return useMutation({
    mutationFn: signupUser,
    onSuccess: (data) => {
      if (data?.token) {
        localStorage.setItem('authToken', data.token)
      }
    },
  })
}
