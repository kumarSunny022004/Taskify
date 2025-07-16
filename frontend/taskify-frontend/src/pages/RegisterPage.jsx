import { useState } from 'react'
import AuthForm from '../components/AuthForm'
import { Link } from 'react-router-dom'

const RegisterPage = () => {
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleRegister = (e) => {
    e.preventDefault()
    console.log('Register with:', username, email, password)
    // TODO: Backend integration
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-900 px-4">
      <div className="w-full max-w-sm bg-white rounded-xl shadow-lg p-8 space-y-4">
        <h2 className="text-2xl font-semibold text-gray-800 text-center">Create a Taskify Account</h2>
        <AuthForm
          title="Register"
          username={username}
          email={email}
          password={password}
          setUsername={setUsername}
          setEmail={setEmail}
          setPassword={setPassword}
          isLogin={false}
          onSubmit={handleRegister}
        />
        <p className="text-sm text-center">
          Already have an account?{' '}
          <Link to="/login" className="text-blue-600">Login</Link>
        </p>
      </div>
    </div>
  )
}

export default RegisterPage
