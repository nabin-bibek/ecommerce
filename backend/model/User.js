const mongoose = require('mongoose');
const {Schema} = mongoose;

const userSchema = new Schema({
    email:{type: String, required:true, unique:true},
    password:{type: String, required:true},
    role:{type: String, require: true, default:"user"},
    address: {type: [Schema.Types.Mixed]},
    name:{type: String},
    orders:{type:[Schema.Types.Mixed]}
});

exports.User = mongoose.model('User', userSchema);