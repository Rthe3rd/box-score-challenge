// import individual player stats object
// import { individualStats, teamInfo, teamTotals, eventInfo, officialsInfo, batterTotals, batterInfo, fieldingInfo, pitchersInfo } from "./data.objects";
const dataObjects = require( "./data.objects");

// Model talks to mongoose which talks to mongo
const mongoose = require('mongoose');

const NbaSchema = new mongoose.Schema( {
    away_period_scores : {
        type: Array,
        default: []
    },
    away_stats: {
        // need to reference playerStats from data.objects.js
        type: [dataObjects.individualStats],
        default: [{}]
    },
    away_team: {
        // need to reference teamInfo from data.objects.js
        type: [dataObjects.teamInfo],
        default: {}
    }, 
    away_totals: {
        // need to reference teamTotals from data.objects.js
        type: [dataObjects.teamTotals],
        default: {}
    },
    event_information: {
        // need to reference eventInformation from data.objects.js
        type: [dataObjects.eventInfo],
        default: {}
    },
    home_peroidScores : {
        type: Array,
        default: []
    },
    home_stats: {
        // need to reference playerStats from data.objects.js
        type: [dataObjects.individualStats],
        default: [{}]
    },
    home_team: {
        // need to reference teamInfo from data.objects.js
        type: [dataObjects.teamInfo],
        default: {}
    }, 
    home_totals: {
        // need to reference teamTotals from data.objects.js
        type: [dataObjects.teamTotals],
        default: {}
    },
    league: {
        type: String,
        deault: ''
    },
    officials:{
        // need to reference officialsInfo from data.objects.js
        type: [dataObjects.officialsInfo],
        default: [{}]
    }
}, {timestamps: true})

const MlbSchema = new mongoose.Schema({
    away_batter_totals : {
        type: [dataObjects.batterTotals],
        default: {}
    },
    away_batter : {
        type: [dataObjects.batterInfo],
        default: [{}]
    },
    away_errors : {
        type: Number,
        default: 0
    },
    away_Fielding : {
        type: [dataObjects.fieldingInfo],
        default: [{}]
    },
    away_period_scores : {
        type: Array,
        default: []
    },
    away_pitchers: {
        type: [dataObjects.pitchersInfo],
        default: [{}]
    },
    away_team: {
        type: [dataObjects.teamInfo],
        default: {}
    },
    event_information: {
        // need to reference eventInformation from data.objects.js
        type: [dataObjects.eventInfo],
        default: {}
    },
    home_batter_totals : {
        type: [dataObjects.batterTotals],
        default: {}
    },
    home_batter : {
        type: [dataObjects.batterInfo],
        default: [{}]
    },
    home_errors : {
        type: Number,
        default: 0
    },
    home_fielding : {
        type: [dataObjects.fieldingInfo],
        default: [{}]
    },
    home_periodScores : {
        type: Array,
        default: []
    },
    home_pitchers: {
        type: [dataObjects.pitchersInfo],
        default: [{}]
    },
    home_team: {
        type: [dataObjects.teamInfo],
        default: {}
    },
    league: {
        type: String,
        deault: ''
    },
    officials:{
        // need to reference officialsInfo from data.objects.js
        type: [dataObjects.officialsInfo],
        default: [{}]
    }
})


const NBABS = mongoose.model("NBABS", NbaSchema)
module.exports = NBABS;