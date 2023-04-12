// import individual player stats object
// import { individualStats, teamInfo, teamTotals, eventInfo, officialsInfo, batterTotals, batterInfo, fieldingInfo, pitchersInfo } from "./data.objects";
const dataObjects = require( "./data.objects");

// Model talks to mongoose which talks to mongo
const mongoose = require('mongoose');

const NBASchema = new mongoose.Schema( {
    away_period_scores : {
        type: Array,
        default: []
    },
    away_stats: {
        type: [Object],
        default: [{}]
    },
    away_team: {

        type: Object,
        default: {}
    }, 
    away_totals: {

        type: Object,
        default: {}
    },
    event_information: {

        type: Object,
        default: {}
    },
    home_period_scores : {
        type: Array,
        default: []
    },
    home_stats: {

        type: [Object],
        default: [{}]
    },
    home_team: {
        type: Object,
        default: {}
    }, 
    home_totals: {

        type: Object,
        default: {}
    },
    league: {
        type: String,
        deault: ''
    },
    officials:{

        type: [Object],
        default: [{}]
    }
}, {timestamps: true})

const MLBSchema = new mongoose.Schema({
    away_batter_totals : {
        type: Object,
        default: {}
    },
    away_batters : {
        type: [Object],
        default: [{}]
    },
    away_errors : {
        type: Number,
        default: 0
    },
    away_fielding : {
        type: [Object],
        default: [{}]
    },
    away_period_scores : {
        type: Array,
        default: []
    },
    away_pitchers: {
        type: [Object],
        default: [{}]
    },
    away_team: {
        type: Object,
        default: {}
    },
    event_information: {
        // need to reference eventInformation from data.objects.js
        type: Object,
        default: {}
    },
    home_batter_totals : {
        type: Object,
        default: {}
    },
    home_batters : {
        type: [Object],
        default: [{}]
    },
    home_errors : {
        type: Number,
        default: 0
    },
    home_fielding : {
        type: [Object],
        default: [{}]
    },
    home_period_scores : {
        type: Array,
        default: []
    },
    home_pitchers: {
        type: [Object],
        default: [{}]
    },
    home_team: {
        type: Object,
        default: {}
    },
    league: {
        type: String,
        deault: ''
    },
    officials:{
        type: [Object],
        default: [{}]
    }
}, {timestamps: true})


const NBABoxScore = mongoose.model("NBABoxScore", NBASchema)
const MLBBoxScore = mongoose.model("MLBBoxScore", MLBSchema)

module.exports  = {NBABoxScore, MLBBoxScore};