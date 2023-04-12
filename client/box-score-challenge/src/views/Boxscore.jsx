import React, { useEffect, useState } from "react";
import axios from 'axios';

const Boxscore = () => {

    const [mlbData, setMLBData] = useState('')
    // Length of table
    const [lengthOfTable, setLengthOfTable] = useState('')
    // Game information
    const [eventInformation, setEventInformation] = useState('')
    // Away team information
    const [awayAbbreviation, setAwayAbbreviation] = useState([])
    const [awayTeamName, setAwayTeamName] = useState('')
    const [awayPeriodScores, setAwayPeriodScores] = useState([])
    const [awayBatterTotals, setAwayBatterTotals] = useState([])
    // Home team information
    const [homeAbbreviation, setHomeAbbreviation] = useState([])
    const [homeTeamName, setHomeTeamName] = useState('')
    const [homePeriodScores, setHomePeriodScores] = useState([])
    const [homeBatterTotals, setHomeBatterTotals] = useState([])



    useEffect(() => {
        const mlbURI = "https://chumley.barstoolsports.com/dev/data/games/eed38457-db28-4658-ae4f-4d4d38e9e212.json"
        // converting current time to standard unix timestamp in order to perform time/date comparision 
        const date = new Date();
        const currentTime = Math.floor(date.getTime() / 1000);
        axios.get("http://localhost:8000/api/getNewestMLBBS")
            .then((res) => {
                // if no data present in db, get it from BS 
                if(!res.data.newestMLBBS) {
                    console.log("Need initial MLBBS data")
                    axios.get(mlbURI)
                        // save fresh data to db
                        .then((res) => {
                            axios.post("http://localhost:8000/api/createMLBBS/", res.data)
                                .then((res) => { console.log("success saving new data to db", res) })
                                // retrieve fresh data from db
                                .then(() => {
                                    axios.get("http://localhost:8000/api/getMLBBS")
                                        .then((res) => {
                                            console.log(res.data.MLBBS[0])
                                            setMLBData(res.data.MLBBS[0])
                                            setEventInformation(res.data.MLBBS[0].event_information)
                                            setLengthOfTable(res.data.MLBBS[0].away_period_scores.length + 4)
                                            setAwayAbbreviation(res.data.MLBBS[0].away_team.abbreviation)
                                            setAwayTeamName(res.data.MLBBS[0].away_team.last_name)
                                            setAwayPeriodScores(res.data.MLBBS[0].away_period_scores)
                                            setAwayBatterTotals(res.data.MLBBS[0].away_batter_totals)
                                            setHomeAbbreviation(res.data.MLBBS[0].home_team.abbreviation)
                                            setHomeTeamName(res.data.MLBBS[0].home_team.last_name)
                                            setHomePeriodScores(res.data.MLBBS[0].home_period_scores)
                                            setHomeBatterTotals(res.data.MLBBS[0].home_batter_totals)
                                        })
                                })
                                .catch((err) => { "Error saving fresh data", console.log(err) })
                        })
                        .catch((err) => { "Error checking data", console.log(err) })
                }
                // if data present in db, check it's age
                else {
                    console.log("ID: " , res.data.newestMLBBS._id)
                    let dataID = res.data.newestMLBBS._id
                    const dbDataAge = Math.floor(Date.parse(res.data.newestMLBBS.updatedAt) / 1000);
                    console.log("DB DATA AGE (s): ", currentTime - dbDataAge)
                    // converting db data age to standard unix timestamp in order to perform comparision
                    // data is in db -> current date - updatedAt > 15k ms ? axios.get(bs) : axios.get(localhose) 
                    if (currentTime - dbDataAge >= 15) {
                        console.log("need to refresh data")
                        axios.get(mlbURI)
                            .then((res) => {
                                // axios.put(url[, data[, config]])
                                axios.put("http://localhost:8000/api/updateMLBBS/", {_id: dataID, data: res.data})
                                    .then((res) => { console.log("success loading", res) })
                                    .catch((err) => {console.log("Error saving fresh data" , err) })
                            })
                            .catch((err) => { "Error checking data", console.log(err) })
                    }
                    // make this newest 
                    axios.get("http://localhost:8000/api/getMLBBS")
                    .then((res) => {
                        console.log(res.data.MLBBS[0])
                        setMLBData(res.data.MLBBS[0])
                        setEventInformation(res.data.MLBBS[0].event_information)
                        setLengthOfTable(res.data.MLBBS[0].away_period_scores.length + 4)
                        setAwayAbbreviation(res.data.MLBBS[0].away_team.abbreviation)
                        setAwayTeamName(res.data.MLBBS[0].away_team.last_name)
                        setAwayPeriodScores(res.data.MLBBS[0].away_period_scores)
                        setAwayBatterTotals(res.data.MLBBS[0].away_batter_totals)
                        setHomeAbbreviation(res.data.MLBBS[0].home_team.abbreviation)
                        setHomeTeamName(res.data.MLBBS[0].home_team.last_name)
                        setHomePeriodScores(res.data.MLBBS[0].home_period_scores)
                        setHomeBatterTotals(res.data.MLBBS[0].home_batter_totals)
                    })
                    .catch((err) => { "Error saving fresh data", console.log(err) })
                }
            })
            .catch((err) => { console.log("error reaching DB", err) })

    }, []);

    return (
        <div className="root">
            <div>
                <table className="mlbboxscore">
                    <thead className="mlbboxscore__tablehead">
                        <tr className="mlbboxscore__tablehead_columnheaders">
                            <td className="mlbboxscore__tablehead--teamabrv">Team</td>
                            {/* Inning number mapping */}
                            {awayPeriodScores.map((inning, i) => {
                                return (
                                    <td className="mlbboxscore__tablehead--inning" key={i}>
                                        {i + 1}
                                    </td>
                                )
                            })
                            }
                            <td className="mlbboxscore__tablehead__totals">Runs</td>
                            <td className="mlbboxscore__tablehead__totals">Hits</td>
                            <td className="mlbboxscore__tablehead__totals">Errors</td>
                        </tr>
                    </thead>
                    <tbody className="mlbboxscore__tablebody">
                        <tr>
                            <td className="mlbboxscore__tablebody__teamabrv--away">{awayAbbreviation}</td>
                            {awayPeriodScores.map((away_score, inning) => {
                                return (
                                    <td className="mlbboxscore__tablebody__inningscore--away" key={inning + 1}>{away_score}</td>
                                )
                            })}
                            <td className="mlbboxscore__tablebody__totals--away">{awayBatterTotals.hits}</td>
                            <td className="mlbboxscore__tablebody__totals--away">{awayBatterTotals.runs}</td>
                            <td className="mlbboxscore__tablebody__totals--away">{mlbData.away_errors}</td>
                        </tr>
                        <tr>
                            <td className="mlbboxscore__tablebody__teamabrv--home">{homeAbbreviation}</td>
                            {homePeriodScores.map((away_score, inning) => {
                                return (
                                    <td className="mlbboxscore__tablebody__inningscore--home" key={inning + 1}>{away_score}</td>
                                )
                            })}
                            <td className="mlbboxscore__tablebody__totals--home">{homeBatterTotals.hits}</td>
                            <td className="mlbboxscore__tablebody__totals--home">{homeBatterTotals.runs}</td>
                            <td className="mlbboxscore__tablebody__totals--home">{mlbData.home_errors}</td>
                        </tr>
                        <tr>
                            <td className="mlbboxscore__tablebody__teams" colSpan={lengthOfTable}>
                                <table className="mlbboxscore__tablebody__teams__table" >
                                    <thead>
                                        <tr>
                                            <th className="mlbboxscore__tablebody__teams__table--away">
                                                <h3>{awayTeamName} </h3>
                                            </th>
                                            <th className="mlbboxscore__tablebody__teams__table--gstatus">
                                                {eventInformation.status == "completed" ? "Final" : eventInformation.status}
                                            </th>
                                            <th className="mlbboxscore__tablebody__teams__table--home">
                                                <h3>{homeTeamName}</h3>
                                            </th>
                                        </tr>
                                        <tr>
                                            <th>{mlbData.updatedAt}</th>
                                        </tr>
                                    </thead>
                                </table>
                            </td>
                        </tr>
                    </tbody>
                </table>

            </div>
        </div>
    );
};

export default Boxscore;
