const mongoose = require('mongoose');
const bcrypt = require('bcrypt-nodejs');
const Schema = mongoose.Schema;

const SALT_WORK_FACTOR = 10
const validateEmail = function(email){
    const re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return re.test(email)
}

const userSchema = new Schema({
    username:{
        type: String,
        trim: true,
        required: true,
        match: [/^[a-zA-Z0-9]+$/,'username is invalid'],
        index: true,
        unique: true
    },
    name: {
        type: String,
        required: false
    },
    age:{
        type: Number,
        required: false
    },
    gender: {
        type: String,
        enum: ['F','M']
    },
    email:{
        type: String,
        trim: true,
        lowercase: true,
        required : true,
        unique: true,
        validate: [validateEmail, 'Please fill a valid email address']
    },
    password:{
        type: String,
        require: true,
        min: 6,
        max: 24
    }
},{timestamps: true});

userSchema.pre('save',function(next){
    var user = this;

    if(!user.isModified('password')) return next();
    bcrypt.genSalt(SALT_WORK_FACTOR,function(err,salt){
        if (err) return next(err);
        bcrypt.hash(user.password,salt,null,function(err,hash){
            if(err) return next(err);
            user.password = hash;
            next();
        });
    });
});

userSchema.methods.comparePassword = function(candidatePassword){
    return new Promise((resolve,reject)=>{
        bcrypt.compare(candidatePassword,this.password,(err,isMatch)=>{
            if(err) reject({
                error: true,
                message: 'Password required'
            });
            resolve(isMatch);
        });
    })
};

const userModel = mongoose.model('users',userSchema);
module.exports = userModel;