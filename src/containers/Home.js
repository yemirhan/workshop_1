import React, { useState, useEffect } from 'react'
import { Button, ButtonDestructured } from './Button'
import { Input } from './Input'

export const Home = () => {
    const [state, setstate] = useState(0)
    const [value, setValue] = useState("")
    useEffect(() => {
        console.log("mounted!");
    }, [])
    useEffect(() => {
        console.log(value);
    }, [value])
    useEffect(() => {
        console.log(value);
    }, [state])
    useEffect(() => {
        console.log("updated!");
    })
    return (
        <div>
            <Button s={setstate} />
            {state}
            <ButtonDestructured setstate={setstate} state={state} />
            <Input value={value} onChange={({ target: { value } }) => setValue(value)} />
        </div>
    )
}

export default Home


