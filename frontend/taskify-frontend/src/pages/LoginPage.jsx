import { useState } from 'react'
import AuthForm from '../components/AuthForm'
import { Link } from 'react-router-dom'

const LoginPage = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleLogin = (e) => {
    e.preventDefault()
    console.log('Login with:', email, password)
    // TODO: Backend integration
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-900 px-4">
      <div className="w-full max-w-sm bg-white rounded-xl shadow-lg p-8 space-y-4">
        <h2 className="text-2xl font-semibold text-gray-800 text-center">Login to Taskify</h2>
        <AuthForm
          title="Login"
          email={email}
          password={password}
          setEmail={setEmail}
          setPassword={setPassword}
          isLogin={true}
          onSubmit={handleLogin}
        />
        <p className="text-sm text-center">
          Don’t have an account?{' '}
          <Link to="/register" className="text-blue-600">Register</Link>
        </p>
      </div>
    </div>
  )
}

export default LoginPage
