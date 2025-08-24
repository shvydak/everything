import React, {useState} from 'react'

const Counter: React.FC = () => {
    const [count, setCount] = useState(0)

    const handleClick = () => {
        setCount(count + 1)
    }

    return (
        <div>
            <p>Counter: {count}</p>
            <button onClick={handleClick}>Increase</button>
        </div>
    )
}

export default Counter
