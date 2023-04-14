import React, { useEffect, useState } from "react";
import axios from 'axios';

const NBABoxScore = () => {

    const [nbaData, setNBAData] = useState('')

    const [eventInformation, setEventInformation] = useState('')

    const [awayPeriodScores, setAwayPeriodScores] = useState([])
    const [homePeriodScores, setHomePeriodScores] = useState([])

    const [awayAbbreviation, setAwayAbbreviation] = useState('')
    const [homeAbbreviation, setHomeAbbreviation] = useState('')

    const [awayTotals, setAwayTotals] = useState('')
    const [homeTotals, setHomeTotals] = useState('')


    useEffect(() => {



        const nbaURI = "https://chumley.barstoolsports.com/dev/data/games/6c974274-4bfc-4af8-a9c4-8b926637ba74.json"
        const date = new Date();
        const currentTime = Math.floor(date.getTime() / 1000);

        axios.get("http://localhost:8000/api/getNewestNBABS")
            .then((res) => {
                if (!res.data.newestNBABS) {
                    console.log("Need initial NBABS data")
                    axios.get(nbaURI)
                        .then((res) => {
                            axios.post("http://localhost:8000/api/createNBABS/", res.data)
                                .then((res) => { console.log("success saving new data to db", res) })
                                // retrieve data from db
                                .then(() => {
                                    axios.get("http://localhost:8000/api/getNBABS")
                                    .then((res) => {
                                        console.log("New get: ", res.data.NBABS[0])
                                        setNBAData(res.data.NBABS[0])
                                        setEventInformation(res.data.NBABS.event_information)
                                        setAwayPeriodScores(res.data.NBABS[0].away_period_scores)
                                        setAwayAbbreviation(res.data.NBABS[0].away_team.abbreviation)
                                        setHomeAbbreviation(res.data.NBABS[0].home_team.abbreviation)
                                        setHomePeriodScores(res.data.NBABS[0].home_period_scores)
                                        setAwayTotals(res.data.NBABS[0].away_totals)
                                        setHomeTotals(res.data.NBABS[0].home_totals)
                                    })
                                })
                        })
                }
                else{
                    console.log("ID: " , res.data.newestNBABS._id)
                    let dataId = res.data.newestNBABS._id
                    const dbDataAge = Math.floor(Date.parse(res.data.newestNBABS.updatedAt) / 1000);
                    console.log("DB DATA AGE (s): ", currentTime - dbDataAge)

                    if(currentTime - dbDataAge >= 15){
                        console.log("need to refresh NBA data")
                        axios.get(nbaURI)
                            .then((res) => {
                                axios.put("http://localhost:8000/api/updateNBABS", {_id: dataId, data: res.data })
                                .then((res) => {console.log("success loading fresh data", res)})
                                .catch((err) => {console.log("Error saving fresh data" , err) })
                            })
                            .catch((err) => { "Error checking data", console.log(err) })
                    }
                    axios.get("http://localhost:8000/api/getNewestNBABS")
                    .then((res) => {
                        setNBAData(res.data.newestNBABS)
                        setEventInformation(res.data.newestNBABS.event_information)
                        setAwayPeriodScores(res.data.newestNBABS.away_period_scores)
                        setAwayAbbreviation(res.data.newestNBABS.away_team.abbreviation)
                        setHomeAbbreviation(res.data.newestNBABS.home_team.abbreviation)
                        setHomePeriodScores(res.data.newestNBABS.home_period_scores)
                        setAwayTotals(res.data.newestNBABS.away_totals)
                        setHomeTotals(res.data.newestNBABS.home_totals)
                        console.log(res.data.newestNBABS)
                    })
                    .catch((err) => { console.log("Error reading newest data", err)} )
                }
            })
            .catch((err) => { console.log("error fetching the newest NBABS", err) })
    }, []);


    return (
        <div className="nbaboxscore__container">
            <div className="nbaboxscore__main">
                <div className ="sidegraphic sidegraphic--away">
                    <h3 className="sidegraphic__abrv">{awayAbbreviation} </h3>
                    <img alt ="logo" src =  "./OKC.png" className="sidegraphic__logo" />
                    <h3 className="sidegraphic__total">{awayTotals.points}</h3>
                </div>
                <table className = "nbaboxscore">
                    <thead className = "nbaboxscore__tablehead">
                        <tr className = "nbaboxscore__tablehead__columnheaders">
                            <td className="nbaboxscore__tablehead__columnheaders--team"></td>
                            {awayPeriodScores.map((period, key) => {
                                return(
                                    <td className = "nbaboxscore__tablehead__columnheaders--period" key = {key}>
                                        {key + 1}
                                    </td>
                                )
                            })
                            }
                            <td className="nbaboxscore__tablehead__columnheaders--total">T</td>
                        </tr>
                    </thead>
                    <tbody className="nbaboxscore__tablebody">
                        <tr className="nbaboxscore__tablebody__scorerow">
                            <td className="nbaboxscore__tablebody__scorerow--abbrv">
                                {awayAbbreviation}
                            </td>
                            {awayPeriodScores.map((score, key) => {
                                return(
                                    <td className="nbaboxscore__tablebody__scorerow--awayscore" key = {key}>
                                        {score}
                                    </td>
                                    )}
                                )
                            }
                            <td className="nbaboxscore__tablebody__scorerow--awaytotal">
                                {awayTotals.points}
                            </td>
                        </tr>
                        <tr>
                            <td>
                                {homeAbbreviation}
                            </td>
                            {awayPeriodScores.map((score, key) => {
                                return(
                                    <td className="nbaboxscore__tablebody__scorerow--homescore" key = {key}>
                                        {score}
                                    </td>
                                )
                            })
                            }
                            <td className="nbaboxscore__tablebody__scorerow--hometotal">
                                {homeTotals.points}
                            </td>
                        </tr>
                    </tbody>
                </table>
                <div className ="sidegraphic sidegraphic--home">
                    <h3 className="sidegraphic__abrv">{homeAbbreviation} </h3>
                    <img alt ="logo" src =  "./MIA.png" className="sidegraphic__logo" />
                    <h3 className="sidegraphic__total">{homeTotals.points}</h3>
                </div>
            </div>

        </div>

    )
}

export default NBABoxScore