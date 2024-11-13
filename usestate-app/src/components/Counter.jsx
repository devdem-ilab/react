import { useState } from "react"

const Counter = () => {
    const [count, setCount] = useState(0);

    const increaseCount = () => {
        setCount(count + 1)
    }

    const decreaseCount = () => {
        setCount(count - 1)
    }

    return(
        <div className="container">
            <h1 className="title">Counter</h1>
            <h1>{count}</h1>
            <button onClick={increaseCount}>Increment</button>
            <button onClick={decreaseCount}>Decrement</button>
        </div>
    )
}

export default Counter;