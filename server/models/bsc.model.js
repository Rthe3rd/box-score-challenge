// import individual player stats object
import { individualStats, teamInfo, teamTotals, eventInfo, officialsInfo, batterTotals, batterInfo, fieldingInfo, pitchersInfo } from "./data.objects";

// Model talks to mongoose which talks to mongo
const mongoose = requires('mongoose');

const NbaBSSchema = new mongoose.Schema( {
    awayPeroidScores : {
        type: Array,
        default: []
    },
    awayStats: {
        // need to reference playerStats from data.objects.js
        type: [individualStats],
        default: [{}]
    },
    awayTeam: {
        // need to reference teamInfo from data.objects.js
        type: teamInfo,
        default: {}
    }, 
    awayTotals: {
        // need to reference teamTotals from data.objects.js
        type: teamTotals,
        default: {}
    },
    event_information: {
        // need to reference eventInformation from data.objects.js
        type: eventInfo,
        default: {}
    },
    homePeroidScores : {
        type: Array,
        default: []
    },
    homeStats: {
        // need to reference playerStats from data.objects.js
        type: [individualStats],
        default: [{}]
    },
    homeTeam: {
        // need to reference teamInfo from data.objects.js
        type: teamInfo,
        default: {}
    }, 
    homeTotals: {
        // need to reference teamTotals from data.objects.js
        type: teamTotals,
        default: {}
    },
    league: {
        type: String,
        deault: ''
    },
    officials:{
        // need to reference officialsInfo from data.objects.js
        type: [officialsInfo],
        default: [{}]
    }
}, {timestamps: true})

const MlbSchema = new mongoose.Schema({
    awayBatterTotals : {
        type: batterTotals,
        default: {}
    },
    awayBatter : {
        type: [batterInfo],
        default: [{}]
    },
    awayErrors : {
        type: Number,
        default: 0
    },
    awayFielding : {
        type: [fieldingInfo],
        default: [{}]
    },
    awayPeriodScores : {
        type: Array,
        default: []
    },
    awayPitchers: {
        type: [pitchersInfo],
        default: [{}]
    },
    awayTeam: {
        type: teamInfo,
        default: {}
    },
    event_information: {
        // need to reference eventInformation from data.objects.js
        type: eventInfo,
        default: {}
    },
    homeBatterTotals : {
        type: batterTotals,
        default: {}
    },
    homeBatter : {
        type: [batterInfo],
        default: [{}]
    },
    homeErrors : {
        type: Number,
        default: 0
    },
    homeFielding : {
        type: [fieldingInfo],
        default: [{}]
    },
    homePeriodScores : {
        type: Array,
        default: []
    },
    homePitchers: {
        type: [pitchersInfo],
        default: [{}]
    },
    homeTeam: {
        type: teamInfo,
        default: {}
    },
    league: {
        type: String,
        deault: ''
    },
    officials:{
        // need to reference officialsInfo from data.objects.js
        type: [officialsInfo],
        default: [{}]
    }
})


const NBABS = mongoose.model("NBABS", nbaBSSchema)
module.exports = NBABS;