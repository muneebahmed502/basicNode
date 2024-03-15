import express from 'express'
import mongoose from './config/db.mjs'
import routes from './routes/index.mjs'
const app = express()

mongoose.connection.once('open', () => console.log("connected to db")).on("error", (err) => console.log("error connecting db -->", err))
app.listen(3001, function (){
    console.log('hello 3001 start')
})
app.use(express.json());
app.use("/",routes)
