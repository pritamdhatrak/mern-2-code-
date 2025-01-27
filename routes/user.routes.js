
const router=require('express').Router();

const {validateSearchQuerry}=require('../middlewares/validatesearchquery.js')

// below file come from index.js 
const {userData,userParam,searchParam}=require('../controller/user.controller.js')


// this is transfer from index.js file and app is converted in router 

// ("/user/user ") so first user is prefix user 
router.get("/",userData)
// ("/user/user/search  ") so first user is prefix user so we remove /user  
router.get("/search",validateSearchQuerry,searchParam)
// ("/user/user/:uuid  ") so first user is prefix user so we remove /user  
router.get("/:uuid",userParam)

module.exports=router