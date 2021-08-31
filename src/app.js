const express = require("express");
const path = require('path');
const hbs = require('hbs');


const staticPath=path.join(__dirname,"../Public");
const viewsPath=path.join(__dirname,"../templates/views");
const partialPath=path.join(__dirname,"../templates/partials");

const port = process.env.PORT || 8000;

const app = express();

app.set("view engine","hbs");
app.set('views',viewsPath);


app.use(express.static(staticPath));

hbs.registerPartials(partialPath);

app.get("/",(req,res)=>{
   res.render("index");
})

app.get("/about",(req,res)=>{
   res.render('about');
})

app.get("/contact",(req,res)=>{
   res.render("contact");
})

app.get("/weather",(req,res)=>{
   res.render("weather");
})

app.get("*",(req,res)=>{
   res.render("404error",{
      errorMsg:"Oops ! Page Not Found"
   });
})


app.listen(port, ()=>{
    console.log("Bsdk");
})