const express = require('express')
const app = express()
const mongoose = require('mongoose')
const monoDb = "mongodb://127.0.0.1:27017 /mytestapp"
const bodyParser = require('body-parser')
const default_routes = require('./routes/default')
const user_routes = require('./routes/user');
const cors  = require('cors')

app.use(cors())

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:false}))


mongoose.connect(monoDb , { useNewUrlParser : true, useUnifiedTopology:true})
.then(()=>{

            app.listen(3000,()=>{
                console.log('> Connected...')
                console.log('> write some code moron')
            })
})
.catch((err)=>console.log(`> Error while connecting to mongoDB : `+err))

app.use('/',default_routes);
app.use('/api',user_routes);