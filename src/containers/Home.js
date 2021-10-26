import React, { useState } from 'react'
import { Button, ButtonDestructured } from './Button'

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


