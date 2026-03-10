import { api } from '../../config/axios/axiosInstance'

export async function getProfile() {
  const response = await api.get('/auth/profile')
  return response.data
}
