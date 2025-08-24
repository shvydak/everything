import React, {useState, useEffect} from 'react'
import {AuthContext} from './AuthContextDef'

export const AuthProvider: React.FC<{children: React.ReactNode}> = ({children}) => {
    const [token, setToken] = useState<string | null>(null)

    useEffect(() => {
        const savedToken = localStorage.getItem('authToken')
        if (savedToken) {
            setToken(savedToken)
        }
    }, [])

    const login = (newToken: string) => {
        setToken(newToken)
        localStorage.setItem('authToken', newToken)
    }

    const logout = () => {
        setToken(null)
        localStorage.removeItem('authToken')
    }

    return (
        <AuthContext.Provider value={{token, login, logout, isAuthenticated: !!token}}>
            {children}
        </AuthContext.Provider>
    )
}
