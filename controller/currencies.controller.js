const express=require('express')
const {data}=require('../db/data.json')



const getCurrencies=(req,res)=>{


    const {min_value}=req.query
    const result= data.filter((ele)=>
        Number(ele.min_size)===Number(min_value))
    if(min_value){
      res.json(result)
    }else{
        res.json(data);
    }
}

const paramsCurrencies=(req,res)=>{
    const {symbol}=req.params
    
      const result=data.find((ele)=>
            ele.id.toLowerCase()===symbol.toLowerCase()
        )
    if(result){
        res.json(result)
    }else{
        res.status(404).json("invalid symbol")
    }
    }


module.exports={getCurrencies,paramsCurrencies}


