const { required } = require('joi');
const mongoose=require('mongoose');

const validator=require('validator')

const authorSchema=new mongoose.Schema({
  fullName:{type:String,maxLength:25},
  twitterHandle:{type:String},
//   email:{type:String,required:true,maxLength:50,
    // validate:(value)=>validator.isEmail(value),
    email: {
        type: String,
        required: true,
        maxLength: 50,
        validate: {
          validator: (value) => validator.isEmail(value),
        //   message: "Invalid email format",
        },
      },
      image: {
        type: String,
        validate: {
          validator: (value) => validator.isURL(value),
        //   message: "Invalid URL format for the image",
        },
      },
    // },
//   },
//   image:{type:String,
//     validate:(value)=>validator.isURL(value),}

},{
    _id:false
})

const blogSchema=new mongoose.Schema({
    // tittle:String,
    // author:[String],
    // content:String,   this is confusing so below is more readable 
    // publishedAt:Date, 

    tittle:{type:String,required:true,unique:true},
    // author:{type:[String]}, this is old way of writing when we use authorSchema then we change it
     author:{type:[authorSchema]},
     content:{type:String,default:""},
     publishedAt:{type:Date,default:null},   
},
{
    timestamps:true
});

    const blogModel=mongoose.model("Blogs",blogSchema)

    module.exports=blogModel





    
