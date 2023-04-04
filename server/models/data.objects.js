const individualStats = {
    last_name : { type: String}, first_name : { type: String}, display_name : { type: String}, position : { type: String}, minutes : { type: Number}, points : { type: Number}, assists : { type: Number}, turnovers : { type: Number}, steals : { type: Number}, blocks : { type: Number}, field_goals_attempted : { type: Number}, field_goals_made : { type: Number}, three_point_field_goals_attempted : { type: Number}, three_point_field_goals_made : { type: Number}, free_throws_attempted : { type: Number}, free_throws_made : { type: Number}, defensive_rebounds : { type: Number}, offensive_rebounds : { type: Number}, personal_fouls : { type: Number}, team_abbreviation : { type: String}, is_starter : { type: Boolean}, field_goal_percentage : { type: Number}, three_point_percentage : { type: Number}, free_throw_percentage : { type: Number}
}

const teamInfo = {
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
    first_name: {
        type: String,
    },
    full_name: {
        type: String,
    },
    last_name: {
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

const teamTotals = {
    assits: {
        type: Number,
        default: 0
    },
    blocks: {
        type: Number,
        default: 0
    },
    field_goal_percentage: {
        type: Number,
        default: 0
    },
    field_goals_attempted: {
        type: Number,
        default: 0
    },
    field_goals_made: {
        type: Number,
        default: 0
    },
    free_throw_percentage: {
        type: Number,
        default: 0
    },
    free_throws_attempted: {
        type: Number,
        default: 0
    },
    free_throws_made: {
        type: Number,
        default: 0
    },
    minutes: {
        type: Number,
        default: 0
    },
    offesnive_rebounds: {
        type: Number
    },
    personal_fouls: {
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
    three_point_field_goal_attempted: {
        type: Number
    },
    three_point_field_goal_made: {
        type: Number
    },
    three_point_percentage: {
        type: Number
    },
    turnovers: {
        type: Number
    }
}

const eventInfo = {
    attendance: {
        type: Number
    },
    duration: {
        type: String
    },
    season_type: {
        type: String
    },
    site: {
        capacity: Number,
        ciy: String,
        name: String,
        state: String,
        surface: String
    },
    start_date_time: {
        type: Date
    },
    status: {
        type: String
    },
    temperature: {
        type: Number
    }
}

const officialsInfo = {
    first_name: {
        type: String
    },
    last_name: {
        type: String
    },
    position: {
        type: String
    }
}

// camel case because data was taken from console.log
// need to fix types
const batterTotals = {
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

const batterInfo = {
    last_name: { type: String }, first_name: { type: String }, display_name: { type: String }, position: { type: String }, bat_order: { type: Number }, sub_bat_order: { type: Number }, sacrifices: { type: Number }, at_bats: { type: Number }, plate_appearances: { type: Number }, singles: { type: Number }, doubles: { type: Number }, triples: { type: Number }, home_runs: { type: Number }, sac_flies: { type: Number }, sac_hits: { type: Number }, stolen_bases: { type: Number }, caught_stealing: { type: Number }, rbi_with_two_outs: { type: Number }, total_bases: { type: Number }, runs: { type: Number }, hits: { type: Number }, rbi: { type: Number }, walks: { type: Number }, strike_outs: { type: Number }, left_on_base: { type: Number }, hit_by_pitch: { type: Number }, team_abbreviation: { type: String }, ops: { type: Number }, avg: { type: Number }, obp: { type: Number }, slg: { type: Number }, at_bats_per_home_run: { type: Number }, at_bats_per_rbi: { type: Number }, walk_rate: { type: Number }, plate_appearances_per_rbi: { type: Number }, plate_appearances_per_home_run: { type: Number }, extra_base_hits: { type: Number }, stolen_base_average: { type: Number }, strikeout_rate: { type: Number }, ops_string: { type: String }, slg_string: { type: String }, obp_string: { type: String }, avg_string: { type: String }, batting_highlights: { type: String }
}

const fieldingInfo = {
    last_name: { type: String }, first_name: { type: String }, display_name: { type: String }, errors: { type: Number }, team_abbreviation: { type: String }
}
const pitchersInfo = {
    last_name: { type: String }, first_name: { type: String }, display_name: { type: String }, pitch_order: { type: Number }, win: { type: Number }, loss: { type: Number }, save: { type: Number }, hold: { type: Number }, era: { type: Number }, whip: { type: Number }, innings_pitched: { type: Number }, hits_allowed: { type: Number }, runs_allowed: { type: Number }, earned_runs: { type: Number }, walks: { type: Number }, intentional_walks: { type: Number }, strike_outs: { type: Number }, home_runs_allowed: { type: Number }, pitch_count: { type: Number }, pitches_strikes: { type: Number }, wild_pitches: { type: Number }, hit_by_pitch: { type: Number }, errors: { type: Number }, team_abbreviation: { type: String }
}
