import { useEffect, useState } from "react";

const Counter = () => {
    const [counter, setCounter] = useState(0);

    const handleCounter = () => {
        setCounter(counter + 1)
    }

    useEffect(() => {
        console.log(`Counter: ${counter}`)
    })

    return(
        <div>
            <h1>Counter</h1>
            <h1>{counter}</h1>
            <button onClick={handleCounter}>
                Increment
            </button>
        </div>
    )
}

export default Counter;