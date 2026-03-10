import { api } from '../../config/axios/axiosInstance'

export async function signupUser({ username, email, password }) {
  const response = await api.post('/auth/register', { username, email, password })
  return response.data
}
