// Any file that uses the mongoose library, will need the following requirement
const mongoose = require('mongoose');
// Connect to the mongoDB using mongoose.connect method. object provided to patch deprecations
mongoose.connect('mongodb://127.0.0.1:27017/box-score-challenge', { 
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => console.log("established connection to the db"))
.catch((err) => console.log("Something went wrong with connecting to the db" , err))
