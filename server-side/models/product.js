const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    title : {
        type : String,
        required:true,
        unique:true
    },

    desc : {
        type : String,
        required:true,
    },

    img : {
        type : String,
        required:true,
    },

    categories :{
        type:Array,
    },

    size : {
        type : Array,
    },

    color : {
        type : Array,
    },

    price : {
        type : Number,
        required:true,
    },

},
{timestamps:true}
)

module.exports = mongoose.model('Products', productSchema)


