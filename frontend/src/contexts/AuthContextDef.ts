import { createContext } from 'react'

interface AuthContextType {
    token: string | null
    login: (token: string) => void
    logout: () => void
    isAuthenticated: boolean
}

export const AuthContext = createContext<AuthContextType | undefined>(undefined)
