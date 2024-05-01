const mongoose=require('mongoose');

const userSchema=mongoose.Schema({
     first_name:{
        type:String,
        required:true,
     },
     last_name:{
        type:String,
        required:true,
     },
     age:{
        type:Number,
       },
   //  userid: {
   //      type: String,
   //      unique: true,
   //      required: true,
   //  },
});




const reviewModel=mongoose.model('User',userSchema);
module.exports=reviewModel;