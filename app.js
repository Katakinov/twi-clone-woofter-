const express = require('express')
const config = require('config')
const path = require('path')
const mongoose = require('mongoose')
const cors = require('cors')

const app = express()
/*app.use(cors());
app.use(express.json);*/

app.use(express.json({ extended: true }))

app.use('/', require("./routes/homeRouter"))
app.use('/post', require("./routes/postRoutes"))
app.use('/find', require('./routes/userRoutes'))
app.use('/actual', require('./routes/actualRoutes'))
app.use('/api/auth', require('./routes/auth.routes'))
app.use('/search', require('./routes/searchRouter'))
//app.use('/api/donation', require('./routes/donationData.routes'))


const PORT = config.get('port') || 8000

async function start(){
    try{
        await mongoose.connect("mongodb+srv://koala:qwerty12@cluster0.1fkwn.mongodb.net/woofterUsers?retryWrites=true&w=majority", {
            useNewUrlParser: true,
            useUnifiedTopology: true
    }, console.log("mongo connected"))       
    app.listen(PORT, () => console.log("Server started on port http://localhost:" + PORT))
    //console.log("mongo connected")  
    } catch (e) {
        console.log('Server error', e.message)
        process.exit(1)
    }
}

start()