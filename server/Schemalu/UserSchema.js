const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    username: { type: String, required: true ,unique:true},
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true }, // Store hashed passwords for security
    college: { type: String, required: true },
    createdAt: { type: Date, default: Date.now },
    projectCount:{type:Number,default:0}
  });
module.export= mongoose.model('User',userSchema);
