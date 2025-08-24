import React, {useState} from 'react'
import {useAuth} from '../hooks/useAuth'

interface LoginData {
    email: string
    password: string
}

const LoginForm: React.FC = () => {
    const {login} = useAuth()

    const [formData, setFormData] = useState<LoginData>({
        email: '',
        password: '',
    })
    const [loading, setLoading] = useState<boolean>(false)
    const [error, setError] = useState<string>('')

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setLoading(true)
        setError('')

        try {
            const response = await fetch('http://localhost:3001/api/v1/users/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            })

            const data = await response.json()

            if (data.success) {
                login(data.data.token)
            } else {
                setError(data.error || 'Login failed')
            }
        } catch (err) {
            setError('Network error: ' + (err instanceof Error ? err.message : 'Unknown error'))
        } finally {
            setLoading(false)
        }
    }

    return (
        <div>
            <h2>Login</h2>

            {error && <p style={{color: 'red'}}>Error: {error}</p>}

            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="email">Email:</label>
                    <input
                        type="email"
                        id="email"
                        value={formData.email}
                        onChange={e => setFormData({...formData, email: e.target.value})}
                        required
                    />
                </div>

                <div>
                    <label htmlFor="password">Password:</label>
                    <input
                        type="password"
                        id="password"
                        value={formData.password}
                        onChange={e => setFormData({...formData, password: e.target.value})}
                        required
                    />
                </div>

                <button type="submit" disabled={loading}>
                    {loading ? 'Logging in...' : 'Login'}
                </button>
            </form>
        </div>
    )
}

export default LoginForm
