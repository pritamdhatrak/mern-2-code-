const{createBlog ,getAllBlog,deleteWithId,upadteBlogs,searchBlogs}=require('../controller/blogsmodel.controller.js')
const router=require('express').Router();


// router.get("/new",createBlog)   
// this is for get request 
  router.post("/new",createBlog)
  router.get("/search",searchBlogs)
  router.get("/",getAllBlog)
 router.delete("/:id",deleteWithId)
  router.patch("/:id",upadteBlogs)
module.exports=router