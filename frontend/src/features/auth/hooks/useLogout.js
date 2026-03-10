import { useMutation, useQueryClient } from '@tanstack/react-query'
import { logoutUser } from '../../api/auth/logoutUser'

export function useLogout() {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: logoutUser,
    onSuccess: () => {
      localStorage.removeItem('authToken')
      queryClient.clear()
    },
  })
}
