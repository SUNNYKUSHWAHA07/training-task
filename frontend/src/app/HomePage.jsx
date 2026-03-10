import { Link } from 'react-router-dom'
import { useUsers } from '../features/demo/hooks/useUsers'
import { Loader } from '../components/ui/Loader'

export default function HomePage() {
  const { data: users, isLoading, isError } = useUsers()

  return (
    <div className="mx-auto flex w-full max-w-4xl flex-col gap-6 px-6 py-16">
      <h1 className="text-3xl font-semibold text-slate-900">Welcome to the Auth Client</h1>
      <p className="text-slate-600">Use the navigation links to sign in, sign up, or view your profile.</p>

      <div className="flex flex-wrap gap-3">
        <Link
          to="/login"
          className="rounded-lg bg-indigo-600 px-5 py-3 text-sm font-medium text-white shadow hover:bg-indigo-500"
        >
          Login
        </Link>
        <Link
          to="/signup"
          className="rounded-lg bg-slate-200 px-5 py-3 text-sm font-medium text-slate-800 shadow hover:bg-slate-300"
        >
          Create account
        </Link>
      </div>

      <div className="rounded-2xl bg-white/80 p-6 shadow-sm backdrop-blur">
        <h2 className="text-xl font-semibold text-slate-900">Example data fetch (React Query)</h2>

        {isLoading ? (
          <div className="py-10">
            <Loader />
          </div>
        ) : isError ? (
          <p className="py-10 text-sm text-red-600">Unable to load demo data.</p>
        ) : (
          <div className="grid gap-4 pt-4 sm:grid-cols-2">
            {users?.slice(0, 6).map((user) => (
              <div key={user.id} className="rounded-lg border border-slate-200 bg-white p-4">
                <p className="text-sm font-semibold text-slate-900">{user.name}</p>
                <p className="text-sm text-slate-600">{user.email}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
