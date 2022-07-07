const express = require ("express");
const app = express();
const path = require("path");

app.listen(3060, ()=>{
    console.log("servidor corriendo en puerto 3060")
});
app.use(express.static("public"));

app.get("/", (req,res) => res.sendFile(path.resolve(__dirname, "views", "home.html")));

