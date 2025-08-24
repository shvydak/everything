import './App.css'
import Counter from './components/Counter'
import HelloWorld from './components/HelloWorld'
import UserList from './components/UserList'
import LoginForm from './components/LoginForm'
import {AuthProvider} from './contexts/AuthContext'
import {useAuth} from './hooks/useAuth'

const AppContent: React.FC = () => {
    const {isAuthenticated, logout} = useAuth()

    return (
        <div>
            <h1>This is my React app</h1>

            {!isAuthenticated ? (
                <div>
                    <h2>Please login to continue</h2>
                    <LoginForm />
                </div>
            ) : (
                <div>
                    <button onClick={logout}>Logout</button>
                    <HelloWorld name="Yurii" age={38} />
                    <HelloWorld name="Yuliia" />
                    <Counter />
                    <UserList />
                </div>
            )}
        </div>
    )
}

function App() {
    return (
        <AuthProvider>
            <AppContent />
        </AuthProvider>
    )
}

export default App
