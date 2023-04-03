// Model talks to mongoose which talks to mongo
const mongoose = requires('mongoose');

const NbaBSSchema = new mongoose.Schema( {
    league: {},
    // away vs home is a field or boolean (true = home, false = away)
    team : {
        // true = home team, false = away team 
        type: Boolean,
        required: true
    },
    peroid_scores : {
        type: Array,
        required: [true, "missing away scores by period"] 
    },
    team_stats: {
        type: Array,
        player_stats: {
            type: Object,
        }
        
    },
    team: {}, 
    totals:{},
    officials:{}
}, {timestamps: true})

const PlayerStats = new mongoose.Schema({
    assists:{
        type: Number
    },
    blocks:{
        type:Number,
    },
    defensive_rebounds:{
        type: Number,
    },
    displayName: {
        type: String
    },
    fieldGoalPercentage:{
        type: Number,
    },
    fieldGoalAttempted:{
        type: Number,
    },
    fieldGoalMade:{
        type: Number,
    },
    firstName: {
        type: String
    },
    freeThrowPercentage:{
        type: Number,
    },
    freeThrowAttempted:{
        type: Number,
    },
    freeThrowMade:{
        type: Number,
    },
    lastName: {
        type: String
    },
    position: {
        type: String
    },
    position: {
        type: String
    },
}, {timestamps: true})


const NBABS = mongoose.model("NBABS", nbaBSSchema)
module.exports = NBABS;