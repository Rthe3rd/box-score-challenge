export const individualStats = {
    assists:{
        type: Number
    },
    blocks:{
        type:Number
    },
    defensive_rebounds:{
        type: Number
    },
    displayName: {
        type: String
    },
    fieldGoalPercentage:{
        type: Number
    },
    fieldGoalAttempted:{
        type: Number
    },
    fieldGoalMade:{
        type: Number
    },
    firstName: {
        type: String
    },
    freeThrowPercentage:{
        type: Number
    },
    freeThrowAttempted:{
        type: Number
    },
    freeThrowMade:{
        type: Number
    },
    is_starter:{
        type: Number
    },
    lastName: {
        type: String
    },
    minutes: {
        type: Number
    },
    offesniveRebounds: {
        type: Number
    },
    personal_fouls: {
        type: Number
    },
    points: {
        type: Number,
    },
    position: {
        type: String
    },
    steals : {
        type: Number
    },
    team_abbreviation: {
        type: String
    },
    threePointFieldGoalPercentage:{
        type: Number
    },
    threePointFieldGoalAttempted:{
        type: Number
    },
    threePointFieldGoalMade:{
        type: Number
    },
    turnovers : {
        type: Number
    }
}

export const teamInfo = {
    abreviation: {
        type: String,
    },
    active: {
        type: Boolean,
    },
    city: {
        type: String,
    },
    conference: {
        type: String,
    },
    division: {
        type: String,
    },
    firstName: {
        type: String,
    },
    fullName: {
        type: String,
    },
    lastName: {
        type: String,
    },
    site_name: {
        type: String,
    },
    state: {
        type: String,
    },
    team_id: {
        type: String,
    }
}

export const teamTotals = {
    assits: {
        type: Number,
        default: 0
    },
    blocks: {
        type: Number,
        default: 0
    },
    fieldGoalPercentage: {
        type: Number,
        default: 0
    },
    fieldGoalsAttempted: {
        type: Number,
        default: 0
    },
    fieldGoalsMade: {
        type: Number,
        default: 0
    },
    freeThrowPercentage: {
        type: Number,
        default: 0
    },
    freeThrowsAttempted: {
        type: Number,
        default: 0
    },
    freeThrowsMade: {
        type: Number,
        default: 0
    },
    minutes: {
        type: Number,
        default: 0
    },
    offesniveRebounds: {
        type: Number
    },
    personalFouls: {
        type: Number
    },
    points: {
        type: Number,
        default: 0
    },
    steals: {
        type: Number,
        default: 0
    },
    threePointFieldGoalAttempted: {
        type: Number
    },
    threePointFieldGoalMade: {
        type: Number
    },
    threePointPercentage: {
        type: Number
    },
    turnovers : {
        type: Number
    }
}

export const eventInfo  = {
    attendance : {
        type: Number
    },
    duration : {
        type: String
    },
    seasonType : {
        type: String
    },
    site : {
        capacity: Number,
        ciy: String,
        name: String,
        state: String,
        surface: String
    },
    startDateTime : {
        type: Date
    },
    status : {
        type: String
    },
    temperature : {
        type: Number
    }
}

export const officialsInfo = {
    firstName: {
        type: String
    },
    lastName: {
        type: String
    }
}