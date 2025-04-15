const mongoose = require('mongoose');
const menuSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true
    }
    ,price :{
        type: Number,
        required: true

    }
    ,taste:{
        type: String,
        enum:['sweet','spicy','sour','bitter','salty'],
        required: true
    }
    ,isdrink:{
        type:Boolean,
        default:false,
    }
    ,ingredients:{
        type: [String],
        default: [],
    },
    num_sales:{
        type: Number,
        default: 0,
    }

})

module.exports = mongoose.model('MenuItem', menuSchema);
