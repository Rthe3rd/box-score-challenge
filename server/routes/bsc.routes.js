// 
const BSCController = require("../controllers/bsc.controller")

module.exports = app => {
    // Connection points for React Server
    // app.get() get request -> retrieve data from db
    app.post("/api/createNBABS", BSCController.createNBABS)
    app.post("/api/createMLBBS/", BSCController.createMLBBS)
    app.get("/api/getNBABS", BSCController.getNBABS)
    // app.put() put request -> update data in db
}