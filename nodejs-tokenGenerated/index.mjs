import express from 'express'
import cors from 'cors'; // Import the CORS module
import mongoose from './config/db.mjs'
import routes from './routes/index.mjs'
const app = express()
app.use(cors());
mongoose.connection.once('open', () => console.log("connected to db")).on("error", (err) => console.log("error connecting db -->", err))
const port = 3001
app.listen(port, function (){
    console.log('hello 3001 start')
})
app.use(express.json());
app.use("/",routes)
