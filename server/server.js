const express = require('express');
const cors = require('cors')
const app = express();
// Any file that uses the mongoose library, will need the following requirement
require('./config/mongoose.config')
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended:true}))

require("./routes/bsc.routes")(app)
// Express server is served up on the hard coded port below
const port = 8000
// Tell server.js to listen/make a connection to the provided port 
const server = app.listen(port, () => console.log(`Listening on port: ${port}`))


app.get('/', (req, res) => { res.send('hello!')} )
