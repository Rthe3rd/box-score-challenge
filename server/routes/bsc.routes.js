// 
const BSCController = require("../controllers/bsc.controller")

module.exports = app => {
    // Connection points for React Server
    app.post("/api/createNBABS", BSCController.createNBABS)
    app.post("/api/createMLBBS/", BSCController.createMLBBS)

    app.put("/api/updateMLBBS/", BSCController.updateMLBBS)
    app.put("/api/updateNBABS/", BSCController.updateNBABS)

    app.get("/api/getNBABS", BSCController.getNBABS)
    app.get("/api/getMLBBS", BSCController.getMLBBS)

    app.get("/api/getNewestMLBBS", BSCController.getNewestMLBBS)
    app.get("/api/getNewestNBABS", BSCController.getNewestNBABS)
}