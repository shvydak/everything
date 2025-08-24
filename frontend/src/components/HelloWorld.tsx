import React from 'react'

interface HelloWorldProps {
    name: string
    age?: number
}

const HelloWorld: React.FC<HelloWorldProps> = ({name, age}) => {
    return (
        <div>
            <h2>Hello, {name}!</h2>
            {age && <p>You are {age}</p>}
        </div>
    )
}

export default HelloWorld
