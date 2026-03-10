import { Link } from 'react-router-dom'
import { useIsFetching } from '@tanstack/react-query'

export function Navbar() {
  const isFetching = useIsFetching()

  return (
    <header className="border-b border-slate-200 bg-white/70 backdrop-blur">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <div className="flex items-center gap-3">
          <Link to="/" className="text-lg font-semibold text-slate-900">
            Auth Client
          </Link>
          {isFetching ? (
            <span className="ml-2 rounded-full bg-indigo-100 px-3 py-1 text-xs font-semibold text-indigo-700">
              Loading…
            </span>
          ) : null}
        </div>

        <div className="flex items-center gap-3">
          <Link to="/login" className="text-sm text-slate-600 hover:text-slate-900">
            Login
          </Link>
          <Link to="/signup" className="text-sm text-slate-600 hover:text-slate-900">
            Signup
          </Link>
          <Link to="/profile" className="rounded-lg bg-indigo-600 px-4 py-2 text-sm font-medium text-white hover:bg-indigo-500">
            Profile
          </Link>
        </div>
      </nav>
    </header>
  )
}
