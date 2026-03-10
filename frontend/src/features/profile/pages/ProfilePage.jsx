import { useProfile } from '../hooks/useProfile'
import { Card } from '../../../components/ui/Card'
import { Loader } from '../../../components/ui/Loader'

export default function ProfilePage() {
  const { data, isLoading, isError } = useProfile()

  if (isLoading) {
    return (
      <div className="mx-auto flex w-full max-w-md items-center justify-center px-6 py-16">
        <Loader />
      </div>
    )
  }

  if (isError) {
    return (
      <div className="mx-auto flex w-full max-w-md flex-col gap-6 px-6 py-16">
        <h1 className="text-2xl font-semibold text-slate-900">Unable to load profile</h1>
        <p className="text-slate-600">Please try again later or log in again.</p>
      </div>
    )
  }

  return (
    <div className="mx-auto flex w-full max-w-md flex-col gap-6 px-6 py-16">
      <h1 className="text-3xl font-semibold text-slate-900">Your profile</h1>
      <Card>
        <div className="space-y-3">
          <p className="text-sm text-slate-600">
            <span className="font-medium text-slate-900">Name:</span> {data?.username || '—'}
          </p>
          <p className="text-sm text-slate-600">
            <span className="font-medium text-slate-900">Email:</span> {data?.email || '—'}
          </p>
        </div>
      </Card>
    </div>
  )
}
