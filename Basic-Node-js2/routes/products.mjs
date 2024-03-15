import express from 'express'
const router = express.Router()
const data = [{ "id": 1, "title": "iPhone 9", "description": "An apple mobile which is nothing like apple", "price": 549, "discountPercentage": 12.96, "rating": 4.69, "stock": 94, "brand": "Apple", "category": "smartphones", "thumbnail": "https://cdn.dummyjson.com/product-images/1/thumbnail.jpg", "images": ["https://cdn.dummyjson.com/product-images/1/1.jpg", "https://cdn.dummyjson.com/product-images/1/2.jpg", "https://cdn.dummyjson.com/product-images/1/3.jpg", "https://cdn.dummyjson.com/product-images/1/4.jpg", "https://cdn.dummyjson.com/product-images/1/thumbnail.jpg"] },
]
router.get("/",(req,res)=>{
    res.send({ message: 'Products fetched successfully', data })
})
/* produts/:id*/ 
router.get("/:id",(req,res)=>{
    res.send({ message: ' single Products fetched successfully', data:data[0] })
})
/* produts/post*/
router.post('/add', (req, res) =>{
    console.log(req.body)
    /*data get with monogo db*/
    res.send({ message: 'Products added successfully' })
})
router.put('/update', (req, res) =>{
    console.log(req.body)

     /*data get with monogo db*/
    res.send({ message: 'Products updated successfully' })
})
router.delete("/:id",(req,res)=> {
    console.log(req.params.id)
    res.send({ message: ' single Products delete successfully' })
})

export default router

/* fetch('http://localhost:3001/products/add',{
    method:"POST",
    headers:{
        'Content-Type': 'application/json'
    },
    body:JSON.stringify({
        title:'iphone',
        price: 5000
    })
   
})
.then(res => res.json())
.then(res => console.log(res))*/

/* put /*
//  fetch('http://localhost:3001/products/add',{
//      method:"PUT",
//      body:JSON.stringify({
//          title:'iphone',
//          price: 5000,
//             id: 123456
//      })
   
//  })
//  .then(res => res.json())
//  .then(res => console.log(res))*/