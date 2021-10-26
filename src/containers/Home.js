import axios from 'axios'
import React, { useState, useEffect } from 'react'
import "./Home.css"
export const Home = () => {
    const [data, setdata] = useState(null)
    const fetchData = async () => await axios.get("https://api.nasa.gov/planetary/apod?api_key=2gxas4LusuRoMS86UYUUONRCYxMeVqXMoKtY3RL5")
    useEffect(() => {
        fetchData().then(t => setdata(t.data))
    }, [])
    if (!data) return <div>loading...</div>
    return (
        <div className="card">
            {data.explanation}
            {/* {data?.explanation || "loading..."} ES6 */}
            {/* <style>
                {
                    `
                    .card {
                        width: 300px;
                        height: auto;
                        border: 1px solid #ccc;
                        border-radius: 12px;
                        box-shadow: 1px 1px 1px 1px #ddd;
                        padding: 10px;
                    }
                    `
                }
            </style> */}
        </div>
    )
}

export default Home


