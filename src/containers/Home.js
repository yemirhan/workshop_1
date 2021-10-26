import React, { useState } from 'react'

export const Home = () => {
    const [state, setstate] = useState(0)
    function handleClick() {
        setstate(prevState => prevState + 1)
        setstate(prevState => prevState + 5)
    }
    return (
        <div>
            <button onClick={() => setstate(state - 1)}>-</button>
            {state}
            <button onClick={handleClick}>+</button>
        </div>
    )
}

export default Home