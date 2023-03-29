const express = require('express');
const app = express();
// Express server is served up on the hard coded port below
const port = 8000
// Any file that uses the mongoose library, will need the following requirement
require('./config/mongoose.config')
// Tell server.js to listen/make a connection to the provided port 
const server = app.listen(port, () => console.log(`Listening on port: ${port}`))


app.get('/', (req, res) => { res.send('hello!')} )
