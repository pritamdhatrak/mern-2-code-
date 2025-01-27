const express=require("express")
const{data}=require('../db/user.json')
const {getQuerryError}=require('../validators/user.validate')

const userData=(req,res)=>{
    res.json(data)
}
const userParam=(req,res)=>{   
 const {uuid}=req.params
 const result=data.find(ele=>
    ele.login.uuid===uuid
 )
   if(result){
    res.json(result)

 }
    else{
    res.sendStatus(404)
 }
}

const searchParam=(req,res)=>{
    
//     const {age,gender}=req.query   this is transfer to middlware
                                     //    validatesearchquery
// const error=getQuerryError({gender,age})
// if(error){
//     res.json(error)
// }

// this part from session 3 
// if(!age && !gender)
// {
//     res.status(422).json({message:"Missing Search Parameters, search using age and/or gender"})
//  }
// if(age){
//     if(!Number(age)){
//         res.status(422).json({message:"Age parameter should be a number"})
//     }
//     if(age>0 || age<=100){
//     res.status(422).json({message:"It should be a number between 0 and 100"})
//     }
// }
// if(gender){
//     if (!["female", "male"].includes(gender)){
//         res.status(422).json({message:"Gender to search can either be 'male' or 'female"})
    // }
// }
// upto above line session 3 15slide 

    if(gender && age){
        const result=data.filter(ele=>
            ele.gender===gender 
            &&
            Number(ele.dob.age)===Number(age)
        )
        res.json(result)
    }else if (gender){
        const result=data.filter(ele=>
            ele.gender===gender 
        )
        res.json(result)
    }else if(age){
        const result =data.filter(ele=>
         Number(ele.dob.age)===Number(age)   
        )
        res.json(result)
    }else {
        res.sendStatus(404)
    }
    
    
    
}
module.exports={userData,userParam,searchParam}