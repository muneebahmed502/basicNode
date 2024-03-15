import mongoose from 'mongoose'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import jwtSecret from '../config/jwt.mjs';
const { Schema } = mongoose;
const userSchema = new Schema({
    email:{
        type : String,
        required : true,
        unique: true
    },
    password: {
        type : String,
        required : true,
    },
    fullname: {
        type : String,
        required : true,
    },
    tokens: {
        default: [],
        type: []
    }
});

userSchema.pre('save', function(next){
    /* is line ka matlab ye hai ke save hone se phle ye function chale ga*/ 
    const user = this
    /* is line ka matlab ye hai ke is function ke this mein hame user mil raha hoga */ 
    
    // console.log('user_>', user.email)

    if (user.isModified('password')){
    const salt = bcrypt.genSaltSync(10);
    /* is line ka matlab ye hai ke password ko 10 bar mash karenge*/ 
const hash = bcrypt.hashSync(user.password, salt);
    /* is line ka matlab ye hai ke userpassword yani frontened wale password
     ko mash wale password denge*/ 
user.password = hash
    }
next()
})
userSchema.methods.comparePassword = function (password) {
    const user = this
    // console.log(user)
    // console.log('pass',user.password)
    // console.log('db password', user.password)
    // console.log('frontend password', password)
    return bcrypt.compareSync(password, user.password)
}
userSchema.methods.generateToken = function(){
    const {_id} = this
    /*yahan hum is function ke this se id nikale ge */
    // console.log("id ->",{_id})
    var token = jwt.sign({ _id }, jwtSecret);
    return token
}



const Users = mongoose.model('Users', userSchema);
export default Users;