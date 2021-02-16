const AutherController =require("../controllers/auther.controller")

module.exports=function(app){
    app.get("/api/getAllAuthers",AutherController.findAll);
    app.post("/api/createNewAther",AutherController.createAuther);
    app.get("/api/:id",AutherController.getOneAuther);
    app.put("/api/edit/:id",AutherController.updateAuther);
    app.delete("/api/:id",AutherController.deleteAuther);
}