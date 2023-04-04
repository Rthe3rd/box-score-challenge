// 
const BSCController = require("../controllers/bsc.controller")

module.exports = app => {
    // Connection points for React Server
    // app.get() get request -> retrieve data from db
    app.post("/api/createBS/NBA", BSCController.create)
    app.get("/api/getBS/NBA", BSCController.getNBA)
    // app.put() put request -> update data in db
}