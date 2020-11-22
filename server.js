const   express     = require("express"),
        api         = require("./server/routes/api")
        bodyParser  = require("body-parser"), 
        app         = express(), 
        port        = 8080;
        
app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*')
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS')
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With')

    next()
})

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))
app.use('/', api)

app.listen(port, ()=>{
    console.log(`Running on port ${port}`);
})