const mongoose=require('mongoose');

const Schema = new mongoose.Schema({
   
    image:{
        type: String,
        // required:true
        // unique: true
    },
    // description:{
    //     type:String,
    // },
    // date:{
    //     type:Date,
    //     default:Date.now
    // }
    // price:{
    //     type: String,
    //     // required:true
    // },
    // description:{
    //     type: String, 
    //     // require:true, 
    //     unique: true
    // }
    
},{strict: false})

const post=mongoose.model('post',PostSchema);

module.exports={post}







