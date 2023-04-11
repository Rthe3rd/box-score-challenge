// Controller requires with the model to perform "business" logic
const NBABoxScore = require("../models/bsc.model")
const MLBBoxScore = require("../models/bsc.model")

// ========================= CREATE ========================= //
// Create/write box score to DB
module.exports.createNBABS = (req, res) => {
    NBABoxScore.create(req.body)
    .then(console.log(req.body))
    .then(newNBABoxScore => {res.json(newNBABoxScore)})
    .catch((err) => {
        res.json({ message: 'Something went wrong create NBA document', error: err })
    })
} 

module.exports.createMLBBS = (req, res) => {
    MLBBoxScore.create(req.body)
    .then(console.log(req.body))
    .then(newMLBBoxScore => res.json(newMLBBoxScore))
    .catch((err) => {
        res.json({message: "Something went wrong creating MLB document", error: err})
    })
}

// ========================= GET ALL ========================= //
// Get/check box scores
module.exports.getNBABS = (req, res) => {
    NBABoxScore.find()
    .then((NBABS) => {
        res.json({NBABS})
    })
    .catch((err) => res.json({ message: "Something went wrong getting NBA BS", error: err }))
}

module.exports.getMLBBS = (req, res) => {
    MLBBoxScore.find()
    .then((MLBBS) =>{
        res.json({MLBBS})
    })
    .catch((err) => res.json({ message: "something went wrong getting MLB BS", error: err}))

}

// ========================= GET MOST UP TO DATE DATA ========================= //
module.exports.getNewestMLBBS = (req, res) => {
    MLBBoxScore.findOne().sort({updatedAt:-1})
    .then((newestMLBBS) => { 
        res.json({newestMLBBS})
    })
    .catch((err) => res.json({ message: "something went wrong getting the newest MLB BS", error: err}))
}


// ========================= UPDATE ALL ========================= //
module.exports.updateMLBBS = (req, res) => {
    // use id from first get request to find in db for update? 
}

// Update box scores
