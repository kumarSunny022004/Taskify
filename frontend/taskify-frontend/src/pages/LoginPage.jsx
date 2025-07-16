import { useState } from 'react'
import InputField from '../components/InputField'

const LoginPage = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Logging in with:', email, password)
    // TODO: connect to backend
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-900 px-4">
      <div className="w-full max-w-sm bg-white rounded-xl shadow-lg p-8 space-y-4">
        <h2 className="text-2xl font-semibold text-gray-800 text-center">Login to Taskify</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <InputField type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
          <InputField type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-md transition"
          >
            Login
          </button>
        </form>
        <p className="text-sm text-center">
          Don’t have an account? <a href="/register" className="text-blue-600">Register</a>
        </p>
      </div>
    </div>
  )
}

export default LoginPage
