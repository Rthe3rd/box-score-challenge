import React, { useEffect, useState } from "react";
import axios from 'axios';

const NBABoxScore = () => {

    const [eventInformation, setEventInformation] = useState('')

    const [awayPeriodScores, setAwayPeriodScores] = useState('')
    const [homePeriodScores, setHomePeriodScores] = useState('')

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
            console.log(res.data.newestNBABS.event_information)
            console.log(res.data.newestNBABS.away_period_scores)
            console.log(res.data.newestNBABS.away_team.abbreviation)
            console.log(res.data.newestNBABS.home_team.abbreviation)
            console.log(res.data.newestNBABS.home_period_scores)
            console.log(res.data.newestNBABS.away_totals)
            console.log(res.data.newestNBABS.home_totals)
            if(!res.data.newestNBABS){
                console.log("Need initial new NBABS data")
                axios.get(nbaURI)
                .then((res) => {
                    axios.post("http://localhost:8000/api/createNBABS/", res.data)
                })
            }
        })
        .catch((err) => {console.log("error fetching the newest NBABS", err)})
    }, [])


    return (
        <div>NBABoxScore</div>
    )
}

export default NBABoxScore