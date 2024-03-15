import mongoose from 'mongoose'
import bcrypt from 'bcrypt'
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
    }
});

userSchema.pre('save', function(next){
    const user = this
    // console.log('user_>', user.email)
    const salt = bcrypt.genSaltSync(10);
const hash = bcrypt.hashSync(user.password, salt);
user.password = hash
next()
})
userSchema.methods.comparePassword = function (password) {
    const user = this
    console.log(user)
    // console.log('pass',user.password)
    // console.log('db password', user.password)
    // console.log('frontend password', password)
    return bcrypt.compareSync(password, user.password)
}
const Users = mongoose.model('Users', userSchema);
export default Users;