// Controller requires with the model to perform "business" logic
const BoxScore = require("../models/bsc.model")

// ========================= CREATE ========================= //
// Create/write box score to DB
module.exports = {
    create: (req, res) => {
        BoxScore.create(req.body)
        .then(boxScore => res.json(boxScore))
        .catch(err => res.status(400).json(err))
    }
} 

// ========================= GET ALL ========================= //
// Get/check box scores
module.exports.getAll = (req, res) => {
    
}


// Update box scores
