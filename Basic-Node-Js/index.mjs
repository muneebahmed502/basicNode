import express from 'express'
import routes from './routes/index.mjs'
const app = express()

app.listen(3001, function (){
    console.log('hello 3000 start')
})
app.use("/",routes)
