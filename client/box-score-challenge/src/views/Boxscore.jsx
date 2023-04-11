import React, { useEffect, useState, useRef } from "react";
import { useParams } from 'react-router-dom'
import axios from 'axios';

const Boxscore = () => {

    let { _id } = useParams('')

    const [boxscore, setBoxscore] = useState([]);
    const [mlbData, setMLBData] = useState('')
    // Length of 
    const [lengthOfTable, setLengthOfTable] = useState('')
    // Away team information
    const [awayAbbreviation, setAwayAbbreviation] = useState([])
    const [awayPeriodScores, setAwayPeriodScores] = useState([])
    const [awayBatterTotals, setAwayBatterTotals] = useState([])
    // Home team information
    const [homeAbbreviation, setHomeAbbreviation] = useState([])
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
                    console.log("need brand new data")
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
                                            setLengthOfTable(res.data.MLBBS[0].away_period_scores.length + 4)
                                            setAwayAbbreviation(res.data.MLBBS[0].away_team.abbreviation)
                                            setAwayPeriodScores(res.data.MLBBS[0].away_period_scores)
                                            setAwayBatterTotals(res.data.MLBBS[0].away_batter_totals)
                                            setHomeAbbreviation(res.data.MLBBS[0].home_team.abbreviation)
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
                    const dbDataAge = Math.floor(Date.parse(res.data.newestMLBBS.updatedAt) / 1000);
                    console.log("CURRENT TIME: ", currentTime)
                    console.log("DB DATA AGE: ", dbDataAge)
                    console.log(currentTime - dbDataAge)
                    // converting db data age to standard unix timestamp in order to perform comparision
                    // data is in db -> current date - updatedAt > 15k ms ? axios.get(bs) : axios.get(localhose) 
                    if (currentTime - dbDataAge >= 15000) {
                        console.log("need to refresh data")
                        axios.get(mlbURI)
                            .then((res) => {
                                axios.put("http://localhost:8000/api/createMLBBS/", res.data)
                                    .then((res) => { console.log("success loading", res) })
                                    .catch((err) => { "Error saving fresh data", console.log(err) })
                            })
                            .catch((err) => { "Error checking data", console.log(err) })
                    }
                    else {
                        console.log("data is fresh")
                    }
                    console.log(res.data.newestMLBBS)
                    setMLBData(res.data.newestMLBBS)
                    setLengthOfTable(res.data.newestMLBBS.away_period_scores.length + 4)

                    setAwayAbbreviation(res.data.newestMLBBS.away_team.abbreviation)
                    setAwayPeriodScores(res.data.newestMLBBS.away_period_scores)
                    setAwayBatterTotals(res.data.newestMLBBS.away_batter_totals)

                    setHomeAbbreviation(res.data.newestMLBBS.home_team.abbreviation)
                    setHomePeriodScores(res.data.newestMLBBS.home_period_scores)
                    setHomeBatterTotals(res.data.newestMLBBS.home_batter_totals)
                }
            })
            .catch((err) => { console.log("error reaching DB", err) })

    }, []);

    return (
        <div className="root">
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
                        <td className="mlbboxscore__tablehead--totals">Runs</td>
                        <td className="mlbboxscore__tablehead--totals">Hits</td>
                        <td className="mlbboxscore__tablehead--totals">Errors</td>
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
                        <td className="mlbboxscore__tablebody__pitchers" colSpan={lengthOfTable}>
                            <table className="mlbboxscore__tablebody__pitchers__table" >
                                <thead>
                                    <tr >
                                        <th className="mlbboxscore__tablebody__pitchers__table--win">Pitcher 1</th>
                                        <th className="mlbboxscore__tablebody__pitchers__table--lose">Pitcher 2</th>
                                        <th className="mlbboxscore__tablebody__pitchers__table--save">Pitcher 3</th>
                                    </tr>
                                </thead>
                            </table>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default Boxscore;
