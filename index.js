const express = require("express");
const path = require("path");
const app = express();
const port = 3000;
const KeertiMiddelware =(req,res,next)=>{
    console.log(req)
}
app.use(express.static(path.join(__dirname,"public")))
app.use(KeertiMiddelware)
app.get("/hello", (req, res) => {
  res.send("Hello World!");
});
app.get("/about", (req, res) => {
 // res.send("Hello World!");
    // res.sendFile(path.join(__dirname,'indexe.html'))//dir_name give directory of file
res.json({"Keerti":"IT"})
});

app.listen(port, () => {
  console.log(`app listening on port ${port}`);
});
