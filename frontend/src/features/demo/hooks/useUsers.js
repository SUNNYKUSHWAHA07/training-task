import { useQuery } from '@tanstack/react-query'
import { getUsers } from '../../../api/demo/getUsers'

export function useUsers() {
  return useQuery({
    queryKey: ['users'],
    queryFn: getUsers,
    staleTime: 1000 * 60 * 5,
    retry: 1,
  })
}
