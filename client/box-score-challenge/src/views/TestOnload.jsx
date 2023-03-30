import { useState, useEffect } from 'react'
import axios from 'axios'

const TestOnload = () => {
    const nbaURI = "https://chumley.barstoolsports.com/dev/data/games/6c974274-4bfc-4af8-a9c4-8b926637ba74.json" 
    const mlbURI = "https://chumley.barstoolsports.com/dev/data/games/eed38457-db28-4658-ae4f-4d4d38e9e212.json"

    // useEffect to make API call to json
    useEffect(() => {
        // using axios.all requires that all calls are valid
        axios.all(axios.get([ nbaURI, mlbURI ]))
        .then((res) => {console.log(res)})
        .catch((err) => {console.log(err)})
    }, [])

    return(
        <div>Test</div>
    )
}

export default TestOnload