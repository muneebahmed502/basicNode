import  express  from "express";
import Users from "../models/user.mjs";
import verifyToken from '../middlewares/verifyToken.mjs'
const router = express.Router();

router.post("/register",async (req,res)=>{
    try{
    const user = new Users(req.body)
    await user.save()
    res.send({ message: 'user registered successfully' })
    } catch(e) {
        res.send({ message: e.message })
    }
})
router.get('/', async (req, res) => {
    const users = await Users.find()
    res.send({ message: 'users fetched successfully',data:users })
})


router.put("/login",async (req,res)=>{
    try{
    const {email,password} = req.body
    const user = await Users.findOne({email})
    if (!user){
        res.send({ message: "User not found!" })
        return
    }
     //Step 2: Compare the passwords
     const isCorrectPassword = user.comparePassword(password)

     if (!isCorrectPassword) {
         res.send({ message: "Invalid Password" })
         return
     }
       //Step 3: Generate Toke
       const token = user.generateToken()
        user.tokens.push(token)
        await user.save()
    
        res.send({ message: 'User logged in successfully!', token })
    } catch(e) {
        res.send({ message: e.message })
    }
})
router.put('/logout', verifyToken, async (req, res) => {
    await Users.findByIdAndUpdate(req.userId, { $pull: { tokens: req.tokenToRemove } })
    res.send({ message: 'Logged out successfully!' })
})


export default router;

/*fetch('http://localhost:3001/users/register'
     
     body:JSON.stringify({
        fullname:'muneeb',email:'asqadri@gmail.com',password:'123'
     })
   
 })
 .then(res => res.json())
 .then(res => console.log(res))*/