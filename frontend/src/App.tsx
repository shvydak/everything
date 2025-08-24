import './App.css'
import Counter from './components/Counter'
import HelloWorld from './components/HelloWorld'
import UserList from './components/UserList'

function App() {
    return (
        <div>
            <h1>This is my React app</h1>
            <HelloWorld name="Yurii" age={38} />
            <HelloWorld name="Yuliia" />
            <Counter />
            <UserList />
        </div>
    )
}

export default App
