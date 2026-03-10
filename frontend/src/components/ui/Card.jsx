export function Card({ children, className = '' }) {
  return (
    <div className={`rounded-2xl bg-white/80 p-6 shadow-sm backdrop-blur ${className}`}>
      {children}
    </div>
  )
}
