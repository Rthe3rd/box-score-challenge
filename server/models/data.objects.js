export const individualStats = {
    assists: {
        type: Number
    },
    blocks: {
        type: Number
    },
    defensive_rebounds: {
        type: Number
    },
    displayName: {
        type: String
    },
    fieldGoalPercentage: {
        type: Number
    },
    fieldGoalAttempted: {
        type: Number
    },
    fieldGoalMade: {
        type: Number
    },
    firstName: {
        type: String
    },
    freeThrowPercentage: {
        type: Number
    },
    freeThrowAttempted: {
        type: Number
    },
    freeThrowMade: {
        type: Number
    },
    is_starter: {
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
    steals: {
        type: Number
    },
    team_abbreviation: {
        type: String
    },
    threePointFieldGoalPercentage: {
        type: Number
    },
    threePointFieldGoalAttempted: {
        type: Number
    },
    threePointFieldGoalMade: {
        type: Number
    },
    turnovers: {
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
    turnovers: {
        type: Number
    }
}

export const eventInfo = {
    attendance: {
        type: Number
    },
    duration: {
        type: String
    },
    seasonType: {
        type: String
    },
    site: {
        capacity: Number,
        ciy: String,
        name: String,
        state: String,
        surface: String
    },
    startDateTime: {
        type: Date
    },
    status: {
        type: String
    },
    temperature: {
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

// camel case because data was taken from console.log
// need to fix types
export const batterTotals = {
    sacrifices: { type: Number },
    at_bats: { type: Number },
    plate_appearances: { type: Number },
    singles: { type: Number },
    doubles: { type: Number },
    triples: { type: Number },
    home_runs: { type: Number },
    sac_flies: { type: Number },
    sac_hits: { type: Number },
    stolen_bases: { type: Number },
    caught_stealing: { type: Number },
    rbi_with_two_outs: { type: Number },
    total_bases: { type: Number },
    runs: { type: Number },
    hits: { type: Number },
    rbi: { type: Number },
    walks: { type: Number },
    strike_outs: { type: Number },
    left_on_base: { type: Number },
    hit_by_pitch: { type: Number },
    ops: { type: Number }, avg: { type: Number }, obp: { type: Number }, slg: { type: Number }, at_bats_per_home_run: { type: Number }, at_bats_per_rbi: { type: Number }, walk_rate: { type: Number }, plate_appearances_per_rbi: { type: Number }, plate_appearances_per_home_run: { type: Number }, extra_base_hits: { type: Number }, stolen_base_average: { type: Number }, strikeout_rate: { type: Number }, ops_string: { type: Number }, slg_string: { type: Number }, obp_string: { type: Number }, avg_string: { type: Number }, batting_highlights: { type: Number }
}

export const batterInfo = {
    last_name: { type: String }, first_name: { type: String }, display_name: { type: String }, position: { type: String }, bat_order: { type: Number }, sub_bat_order: { type: Number }, sacrifices: { type: Number }, at_bats: { type: Number }, plate_appearances: { type: Number }, singles: { type: Number }, doubles: { type: Number }, triples: { type: Number }, home_runs: { type: Number }, sac_flies: { type: Number }, sac_hits: { type: Number }, stolen_bases: { type: Number }, caught_stealing: { type: Number }, rbi_with_two_outs: { type: Number }, total_bases: { type: Number }, runs: { type: Number }, hits: { type: Number }, rbi: { type: Number }, walks: { type: Number }, strike_outs: { type: Number }, left_on_base: { type: Number }, hit_by_pitch: { type: Number }, team_abbreviation: { type: String }, ops: { type: Number }, avg: { type: Number }, obp: { type: Number }, slg: { type: Number }, at_bats_per_home_run: { type: Number }, at_bats_per_rbi: { type: Number }, walk_rate: { type: Number }, plate_appearances_per_rbi: { type: Number }, plate_appearances_per_home_run: { type: Number }, extra_base_hits: { type: Number }, stolen_base_average: { type: Number }, strikeout_rate: { type: Number }, ops_string: { type: String }, slg_string: { type: String }, obp_string: { type: String }, avg_string: { type: String }, batting_highlights: { type: String }
}

export const fieldingInfo = {
    last_name: { type: String }, first_name: { type: String }, display_name: { type: String }, errors: { type: Number }, team_abbreviation: { type: String }
}
export const pitchersInfo = {
    last_name: { type: String }, first_name: { type: String }, display_name: { type: String }, pitch_order: { type: Number }, win: { type: Number }, loss: { type: Number }, save: { type: Number }, hold: { type: Number }, era: { type: Number }, whip: { type: Number }, innings_pitched: { type: Number }, hits_allowed: { type: Number }, runs_allowed: { type: Number }, earned_runs: { type: Number }, walks: { type: Number }, intentional_walks: { type: Number }, strike_outs: { type: Number }, home_runs_allowed: { type: Number }, pitch_count: { type: Number }, pitches_strikes: { type: Number }, wild_pitches: { type: Number }, hit_by_pitch: { type: Number }, errors: { type: Number }, team_abbreviation: { type: String }
}
