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
// ************************ HELPER CODE TO GET ALL FIELDS ************************** \\
            const objArray = []
            // for(const key in Object.keys(mlb.data.away_batter_totals)){
                // let keyString = Object.keys(mlb.data.away_batter_totals)[key]
                // let string = `${keyString} : { type: Number}`
                // objArray.push(string)
            // }
            let string;
            const schemaField = "away_stats";
            // loops through indices of array
            for(const x in nba.data[schemaField]){
                // loops through the keys in each of the objects
                for(const key in Object.keys(nba.data[schemaField][x])){
                    let keyString = Object.keys(nba.data[schemaField][x])[key]
                    // testing to see if the value is a string or number
                    let dataType;
                    if(( typeof nba.data[schemaField][x][keyString] ) == "string"){
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
// ************************ HELPER CODE TO GET ALL FIELDS ************************** \\
        }))
        .catch((err) => {console.log(err)})
    }, [])

    return(
        <div>Test
            
        </div>
    )
}

export default TestOnload