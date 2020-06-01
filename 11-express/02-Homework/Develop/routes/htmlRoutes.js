var path = require("path");

//exporting
module.exports = function(app) {

// /notes should return notes.html
app.get("/notes", function(req, res){
    res.sendfile(path.join(__dirname, "../public/notes.html"));

});
// /* should return index.html
app.get("*", function(req,res){
    res.sendfile(path.join(__dirname, "../public/index.html"));
});
}