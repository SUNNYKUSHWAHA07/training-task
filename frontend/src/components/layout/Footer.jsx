export function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white/70 py-6">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-1 px-6 text-sm text-slate-500">
        <p>© {new Date().getFullYear()} Auth Client</p>
        <p className="text-xs">Built with React, Tailwind, and React Query</p>
      </div>
    </footer>
  )
}
