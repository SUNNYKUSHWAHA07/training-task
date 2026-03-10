import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useLogin } from '../hooks/useLogin'
import { Button } from '../../../components/ui/Button'
import { Input } from '../../../components/ui/Input'
import { Card } from '../../../components/ui/Card'
import { useToast } from '../../../components/ui/ToastProvider'

export default function LoginPage() {
  const navigate = useNavigate()
  const toast = useToast()
  const [form, setForm] = useState({ email: '', password: '' })
  const login = useLogin()

  const onSubmit = async (event) => {
    event.preventDefault()

    login.mutate(form, {
      onSuccess: () => {
        toast.show('Logged in successfully')
        navigate('/profile')
      },
      onError: (error) => {
        toast.show(error?.response?.data?.message || 'Login failed')
      },
    })
  }

  return (
    <div className="mx-auto flex w-full max-w-md flex-col gap-6 px-6 py-16">
      <h1 className="text-3xl font-semibold text-slate-900">Login</h1>
      <Card>
        <form onSubmit={onSubmit} className="space-y-4">
          <label className="block text-sm font-medium text-slate-700">
            Email
            <Input
              value={form.email}
              onChange={(event) => setForm((prev) => ({ ...prev, email: event.target.value }))}
              type="email"
              required
              placeholder="you@example.com"
            />
          </label>

          <label className="block text-sm font-medium text-slate-700">
            Password
            <Input
              value={form.password}
              onChange={(event) => setForm((prev) => ({ ...prev, password: event.target.value }))}
              type="password"
              required
              placeholder="••••••••"
            />
          </label>

          <Button type="submit" disabled={login.isLoading}>
            {login.isLoading ? 'Logging in…' : 'Log in'}
          </Button>
        </form>
      </Card>
    </div>
  )
}
