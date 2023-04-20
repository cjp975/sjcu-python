const express = require('express')
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(bodyParser.raw());
app.use(bodyParser.text());
app.use('/calculator', express.static(__dirname + '/static'));

app.listen(8888);

console.log("Server is running in Port 8888")

app.get("/",(req, res)=>{
    res.send("Hello World!");
})

app.post("/calc", (req, res)=>{
    console.log("calc method")
    const data= req.body;
    console.log(data)
    console.log(eval(data))
    res.send(String(eval(data)))
})