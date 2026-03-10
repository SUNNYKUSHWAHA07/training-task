import { api } from '../../config/axios/axiosInstance'

export async function logoutUser() {
  const response = await api.post('/auth/logout')
  return response.data
}
