const Joi=require('joi')



const schema=Joi.object().keys({
    age:Joi.number().integer().min(0).max(100),
    gender:Joi.string().valid("male","female")
}).or("age","gender")

const getQuerryError=(incomingData)=>{
const result=schema.validate(incomingData)
return result.error
}

module.exports={
    getQuerryError
}



// const Joi=require('joi');

// const schema=Joi.object.keys({
//     age:Joi.number().integer().minZ(0).max(0),
//     gender:Joi.string().valid("male","female")
// }).or("age","gender")

// const getQueeryError=(data)=>{
//     const result=schema.validate(data)    this all program is done in validators(joi)
// return result.error
// }
// const error=getQueeryError({age,gender})
// if(error){
//     res.json(error)
// }