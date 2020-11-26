const   express     = require("express"),
        api         = require("./server/routes/api")
        bodyParser  = require("body-parser"), 
        app         = express(), 
        port        = 8080
        
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))
app.use('/', api)

app.listen(port, ()=>{
    console.log(`Running on port ${port}`)
})