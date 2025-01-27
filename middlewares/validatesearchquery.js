const{ getQuerryError}=require('../validators/user.validate')
// above is came fron validator folder 

const validateSearchQuerry=(req,res,next)=>{
    const {age,gender}=req.query
    const error=getQuerryError({gender,age})
    if(error){
        res.json(error)
    }
    next();
}
module.exports={validateSearchQuerry}