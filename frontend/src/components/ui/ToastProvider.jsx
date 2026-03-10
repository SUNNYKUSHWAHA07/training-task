import { createContext, useContext, useMemo, useState } from 'react'

const ToastContext = createContext({
  show: () => {},
})

export function ToastProvider({ children }) {
  const [toast, setToast] = useState(null)

  const value = useMemo(
    () => ({
      show: (message) => {
        setToast(message)
        window.setTimeout(() => setToast(null), 3000)
      },
    }),
    [],
  )

  return (
    <ToastContext.Provider value={value}>
      {children}
      {toast ? (
        <div className="fixed bottom-6 left-1/2 z-50 -translate-x-1/2 rounded-full bg-slate-900 px-5 py-3 text-sm text-white shadow-lg">
          {toast}
        </div>
      ) : null}
    </ToastContext.Provider>
  )
}

export function useToast() {
  return useContext(ToastContext)
}
