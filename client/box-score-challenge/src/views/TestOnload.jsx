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
        axios.all([axios.get(nbaURI), axios.get(mlbURI)])
            // spread/desctruct response into different sub-responses
            .then(axios.spread((nba, mlb) => {
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
                for (const x in nba.data[schemaField]) {
                    // loops through the keys in each of the objects
                    for (const key in Object.keys(nba.data[schemaField][x])) {
                        let keyString = Object.keys(nba.data[schemaField][x])[key]
                        // testing to see if the value is a string or number
                        let dataType;
                        if ((typeof mlb.data[schemaField][x][keyString]) == "string") {
                            dataType = "String"
                        }
                        if ((typeof mlb.data[schemaField][x][keyString]) == "boolean") {
                            dataType = "Boolean"
                        }
                        else {
                            dataType = "Number"
                        }
                        string = `${keyString} : { type: ${dataType}}`
                        objArray.push(string)
                    }
                }
                console.log(objArray)
                // ************************ HELPER CODE TO GET ALL FIELDS ************************** \\
            }))
            .catch((err) => { console.log(err) })
    }, [])

    return (
            <div>  
                <div className="boxscore">
                    {/* row-1 */}
                    <div className="boxscore__team boxscore__team--header">
                        <label>BlankSpace</label>
                        <div className="boxscore__team__units">
                            <span>1</span>
                            <span>2</span>
                            <span>3</span>
                            <span>4</span>
                            <span>5</span>
                            <span>6</span>
                            <span>7</span>
                            <span>8</span>
                            <span>9</span>
                        </div>
                        <div className="boxscore__team__results">
                            <span>R</span>
                            <span>H</span>
                            <span>E</span>
                        </div>
                    </div>
                    {/* row-2 */}
                    <div className="boxscore__team boxscore__team--away">
                        <label>CHC</label>
                        <div className="boxscore__team__units">
                            <span>1</span>
                            <span>0</span>
                            <span>2</span>
                            <span>0</span>
                            <span>0</span>
                            <span>0</span>
                            <span>0</span>
                            <span>1</span>
                            <span>1</span>
                        </div>
                        <div className="boxscore__team__results">
                            <span>5</span>
                            <span>12</span>
                            <span>0</span>
                        </div>
                    </div>

                    {/* <div className="boxscore__team boxscore__team--home">
                        <label>STL</label>
                        <div className="boxscore__team__units">
                            <span>0</span>
                            <span>0</span>
                            <span>0</span>
                            <span>3</span>
                            <span>0</span>
                            <span>0</span>
                            <span>0</span>
                            <span>0</span>
                            <span>1</span>
                        </div>
                        <div className="boxscore__team__results">
                            <span>4</span>
                            <span>8</span>
                            <span>1</span>
                        </div>
                    </div>

                    <div className="boxscore__details">
                        <div className="boxscore__details__team boxscore__details__team--away">
                            <p>
                                <strong>Cubs</strong><small>CHC</small>
                            </p>
                            <span>56-38</span>
                        </div>
                        <div className="boxscore__details__info">
                            <strong>Btm<br />9th</strong>
                        </div>
                        <div className="boxscore__details__team boxscore__details__team--home">
                            <p>
                                <strong>Cardinals</strong><small>STL</small>
                            </p>
                            <span>56-38</span>
                        </div>
                    </div> */}
                </div>
            </div>
    )
}

export default TestOnload