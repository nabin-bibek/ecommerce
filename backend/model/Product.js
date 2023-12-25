const mongoose = require('mongoose');

const {Schema} = mongoose;

const productSchema = new Schema({
    title: {type: String, required:true, unique:true},
    description: {type: String, required:true},
    price: {type:Number, min:[0, "Price should be atleast 0"], max:[10000, "Maximum Amount should'nt exceed 10,000"]},
    discountPercentage: {type:Number, min:[1, "Discount should be atleast 0%"], max:[99, "Maximum Discount should'nt exceed 99%"]},
    rating: {type:Number, min:[0, "Rating should be atleast 0"], max:[5, "Maximum Rating should'nt exceed 5"], default:0},
    stock: {type:Number, min:[0, "Stock should be atleast 0"], default:0},
    brand: {type: String, required:true},
    category: {type: String, required:true},
    thumbnail: {type: String, required:true},
    images: {type: [String], required:true},
    deleted: {type: Boolean, default: false},
})

const virtual =productSchema.virtual('id');
virtual.get(function(){
    return this._id;
})
productSchema.set('toJSON', {
    virtuals:true,
    versionKey: false,
    transform: function (doc,ret) {delete ret._id}
})

exports.Product = mongoose.model('Product', productSchema)