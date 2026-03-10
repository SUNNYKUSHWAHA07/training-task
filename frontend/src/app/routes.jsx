import { Routes, Route, Navigate } from 'react-router-dom'
import { useIsFetching } from '@tanstack/react-query'
import { Navbar } from '../components/layout/Navbar'
import { Footer } from '../components/layout/Footer'
import LoginPage from '../features/auth/pages/LoginPage'
import SignupPage from '../features/auth/pages/SignupPage'
import ProfilePage from '../features/profile/pages/ProfilePage'
import HomePage from './HomePage'
import { ProtectedRoute } from '../hoc/ProtectedRoute'
import EmailSendPage from '../features/auth/pages/EmailSendPage'

export function AppRoutes() {
  const isFetching = useIsFetching()

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      {isFetching ? (
        <div className="h-1 w-full bg-indigo-500/80 animate-pulse" />
      ) : null}
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/emailsend" element={<EmailSendPage />} />
          <Route
            path="/profile"
            element={
              <ProtectedRoute>
                <ProfilePage />
              </ProtectedRoute>
            }
          />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}
