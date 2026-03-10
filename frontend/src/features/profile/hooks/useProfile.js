import { useQuery } from '@tanstack/react-query'
import { getProfile } from '../../../api/auth/getProfile.js'

export function useProfile() {
  return useQuery({
    queryKey: ['profile'],
    queryFn: getProfile,
    staleTime: 1000 * 60 * 2,
    retry: 1,
  })
}
