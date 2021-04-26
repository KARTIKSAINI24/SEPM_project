var express = require('express')
const mongoose =  require('mongoose')

const app = express()


app.use(express.static(__dirname +'/css'));
app.use(express.static(__dirname +'/images'));
app.use(express.static(__dirname +'/flaticon'));
app.use(express.static(__dirname +'/js'));
app.use(express.static(__dirname +'/modules'));
console.log(__dirname);

mongoose.connect('mongodb://Localhost:27017/railwaydb',{
    useNewUrlParser:true,useUnifiedTopology:true
});
var db =mongoose.connection;

db.on('error',()=> console.log("error connceting to database"));
db.once('open', ()=> console.log("connected to database"))

// app.post("signup", (req, res)=>{
//     var name = req.body.name;
//     var email = req.body.email;
//     var passwd = req.body.password;
    
//     var data={
//         "name":name,
//         "email":email,
//         "passwd":passwd

//     }
//     console.log("gg")
// })

app.get("/", (req,res)=>{
    res.sendFile("C:/project/SEPM_project/html/index.html")
    // res.send("hello")
    
    res.set({
        "Allow-access-Allow-Origin":"*"
    })
    // return res("html/index.html");
})
// app.get("/css/style.css", (req,res)=>{
//     res.sendFile("C:/project/SEPM_project/css/style.css")
    
// })

app.listen(3001)
// console.log(__dirname);

console.log("succesful")