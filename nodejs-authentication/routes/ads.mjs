import express from 'express'
import Ads from '../models/Ads.mjs'
const router = express.Router()

//POST: localhost:3001/ads
router.get('/', async (req, res) => {
    const ads = await Ads.find()
    res.send({ message: 'Ads fetched successfully', data: ads })
})

// router.get('/:id')
router.get("/:id",async (req,res)=>{
   
   
    try {
        const id = req.params.id;
        const ads = await Ads.findById(id).exec();
        res.send({ message: ' single Products fetched successfully', data: ads })
    } catch (e) {
        res.send({ message: e.message })
    }
   
  
})
// router.post('/post')
router.post('/post', async (req, res) => {
    try {
        const ad =  Ads(req.body)
        await ad.save()

        res.send({ message: 'Ad posted successfully' })
    } catch (e) {
        res.send({ message: e.message })
    }
})

//router.put('/:id')
router.put("/:id",async (req,res)=>{
    const id = req.params.id;
    try {
        const update = req.body
        const ad =  await Ads.findByIdAndUpdate(id, update) 
console.log("ads" + ad)
        res.send({ message: 'Ad updated successfully' })
    } catch (e) {
        res.send({ message: e.message })
    }
   
  
})
//router.delete('/:id')
router.delete("/:id",async (req,res)=>{
    const id = req.params.id;
    try {
        const del = req.body
        const ad =  await Ads.findByIdAndDelete(id,del)
console.log("ads" + ad)
        res.send({ message: 'Ad delete successfully' })
    } catch (e) {
        res.send({ message: e.message })
    }
   
  
})

export default router



 /*fetch('http://localhost:3001/ads/post',{
     method:"POST",
     headers:{
         'Content-Type': 'application/json'
     },
     body:JSON.stringify({
         title:'samsung',
         amount: 80000,description:'10/10'
     })
   
 })
 .then(res => res.json())
 .then(res => console.log(res))*/






































































































































































































































































































































