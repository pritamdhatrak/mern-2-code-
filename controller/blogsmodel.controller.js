const Blogs=require("../models/blogmodel.js")


// below function is for creating the blog 
const createBlog= async(req,res)=>{
    // const blogDocument=new Blogs({tittle:"mongodb tittle"})   
    // this is for get request 
  
    //  and below is is put request getting data from user  so using req.body
    try{
        const blogDocument=  new Blogs(req.body)

        await blogDocument.save();
        res.json(blogDocument)
    }catch(error){
  res.send(error.message)
    }    

}

// below function is for reading all the data or document

const getAllBlog=async (req,res)=>{
    const allBlog=await Blogs.find({})
    res.json(allBlog)
}
const deleteWithId=async (req,res)=>{
    const {id}=req.params
    const data= await Blogs.findOneAndDelete({_id:id})
    res.json(data)
}

const upadteBlogs= async (req,res)=>{
    const {id}=req.params;
    const filter={_id:id}
    const update=req.body
    const option={new:true}

    const blogUpdate= await Blogs.findOneAndUpdate(filter,update,option)
       res.json(blogUpdate)
}


const searchBlogs = async (req, res) => {
    const { tittle:inputTittle,email:inputEmail}=req.query;
    console.log(tittle)
     
      const result = await Blogs.find({
        tittle:inputTittle,
        author: { $elemMatch: { email: inputEmail } },
      });
      res.json(result);
     };
  
module.exports={createBlog,getAllBlog,deleteWithId,upadteBlogs,searchBlogs}