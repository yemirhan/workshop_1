import React, { useState } from 'react'
import { Button, ButtonDestructured } from './Button'
import { Input } from './Input'

export const Home = () => {
    // const [state, setstate] = useState(0)
    const [value, setValue] = useState("")
    const onChange = (e) => setValue(e.target.value);
    const onChangeDestructured = ({ target: { value } }) => setValue(value);
    return (
        <div>
            {/* <Button s={setstate} />
            {state}
            <ButtonDestructured setstate={setstate} state={state} /> */}
            <Input value={value} onChange={onChangeDestructured} />
        </div>
    )
}

export default Home


