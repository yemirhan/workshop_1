import React, { useState } from 'react'

export const Home = () => {
    const [state, setstate] = useState(0)
    return (
        <div>
            <Button s={setstate} />
            {state}
            <ButtonDestructured setstate={setstate} state={state} />
        </div>
    )
}

export default Home


const Button = (props) => {
    return <button onClick={() => props.s(prevState => prevState - 1)}>-</button>
}
const ButtonDestructured = ({ setstate, ...rest }) => {
    return <button onClick={() => setstate(prevState => prevState + 1)}>+</button>
}