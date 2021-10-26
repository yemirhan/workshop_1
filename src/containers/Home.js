import axios from 'axios'
import React, { useState, useEffect } from 'react'

export const Home = () => {
    const [data, setdata] = useState(null)
    const fetchData = async () => await axios.get("https://api.nasa.gov/planetary/apod?api_key=2gxas4LusuRoMS86UYUUONRCYxMeVqXMoKtY3RL5")
    useEffect(() => {
        fetchData().then(t => setdata(t.data))
    }, [])
    if (!data) return <div>loading...</div>
    return (
        <div>
            {data.explanation}
            {/* {data?.explanation || "loading..."} ES6 */}
        </div>
    )
}

export default Home


