const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const personSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    age: {
        type: Number
    },
    email: {
        type: String,
        required: true
    },
    phone: {
        type: Number,
        required: true
    }
    ,work:{
        type: String,
        enum: ['cheaf','waiter','manager'],
        required: true
        
    },
    username:{
    required:true,
    type:String,
    },
    password:{
        type:String,
        required:true
    }

});
personSchema.pre('save',async function (next){
    const person = this
    try{
        if(!person.isModified('password'))

        next();
    }
    catch(err){

    }
})
module.exports = mongoose.model('Person', personSchema);
