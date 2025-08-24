import React, {useEffect, useState} from 'react'
import {useAuth} from '../hooks/useAuth'

interface User {
    _id: string
    email: string
    firstName: string
    lastName: string
    role: string
    isActive: boolean
}

interface ApiResponse {
    success: boolean
    data: User[]
    message?: string
    error?: string
}

const UserList: React.FC = () => {
    const {token} = useAuth() // Получаем токен из AuthContext
    const [users, setUsers] = useState<User[]>([])
    const [loading, setLoading] = useState<boolean>(true)
    const [error, setError] = useState<string>('')

    const fetchUsers = async () => {
        try {
            setLoading(true)
            setError('')

            const response = await fetch('http://localhost:3001/api/v1/users', {
                headers: {
                    Authorization: `Bearer ${token}`, // Добавляем токен в заголовок
                },
            })
            const data: ApiResponse = await response.json()

            if (data.success) {
                setUsers(data.data)
            } else {
                setError(data.error || 'Failed to fetch users')
            }
        } catch (err) {
            setError('Network error: ' + (err instanceof Error ? err.message : 'Unknown error'))
        } finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        if (token) {
            // Загружаем пользователей только если есть токен
            fetchUsers()
        }
    }, [token]) // Зависимость от token

    return (
        <div>
            <h2>User List</h2>

            {loading && <p>Loading users...</p>}

            {error && <p style={{color: 'red'}}>Error: {error}</p>}

            {!loading && !error && users.length === 0 && <p>No users found</p>}

            {!loading && !error && users.length > 0 && (
                <div>
                    <h3>Found {users.length} users:</h3>
                    <ul>
                        {users.map(user => (
                            <li key={user._id}>
                                <strong>
                                    {user.firstName} {user.lastName}
                                </strong>{' '}
                                - {user.email}
                                <br />
                                Role: {user.role} | Active: {user.isActive ? 'Yes' : 'No'}
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    )
}

export default UserList
