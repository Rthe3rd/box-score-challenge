import { useState, useEffect } from 'react'
import axios from 'axios'

const TestOnload = () => {
    const nbaURI = "https://chumley.barstoolsports.com/dev/data/games/6c974274-4bfc-4af8-a9c4-8b926637ba74.json" 
    const mlbURI = "https://chumley.barstoolsports.com/dev/data/games/eed38457-db28-4658-ae4f-4d4d38e9e212.json"

    const [nbaData, setNBAData] = useState({})
    const [mlbData, setMLBData] = useState({})

    // useEffect to make API call to json
    useEffect(() => {
        // using axios.all requires that all calls are valid
        axios.all([ axios.get(nbaURI), axios.get(mlbURI) ])
        // spread/desctruct response into different sub-responses
        .then(axios.spread((nba, mlb) => { 
            console.log(nba.data, mlb.data)
            setNBAData(nba.data)
            setMLBData(mlb.data.away_batter_totals)
            // console.log(Object.keys(mlb.data.away_batter_totals))
            const objArray = []
            // for(const key in Object.keys(mlb.data.away_batter_totals)){
                // let keyString = Object.keys(mlb.data.away_batter_totals)[key]
                // let string = `${keyString} : { type: Number}`
                // objArray.push(string)
            // }
            let string;
            for(const x in mlb.data.away_batters){
                for(const key in Object.keys(mlb.data.away_batters[x])){
                    let keyString = Object.keys(mlb.data.away_batters[x])[key]
                    // console.log(mlb.data.away_batters[x][keyString])
                    // testing to see if the value is a string or number
                    let dataType;
                    if(( typeof mlb.data.away_batters[x][keyString] ) == "string"){
                        dataType = "String"
                    }
                    else{
                        dataType = "Number"
                    }
                    string = `${keyString} : { type: ${dataType}}`
                    objArray.push(string)
                }
            }
            console.log(objArray)
            // console.log(objArray)
            // attendance : {
            //     type: Number
            // },
            // duration : {
            //     type: String
            // },
            // seasonType : {
            //     type: String
            // }
        
        }))
        .catch((err) => {console.log(err)})
    }, [])

    return(
        <div>Test
            
        </div>
    )
}

export default TestOnload