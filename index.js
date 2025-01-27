require('dotenv').config();
// dot env file for password 

const express= require('express');
const blogRouter=require('./routes/blogsmodel.router.js')
const mongoose=require('mongoose')
const MONGODB_URI="mongodb://127.0.0.1:27017"
mongoose.connect(MONGODB_URI).then(()=>{
    console.log("CONNECT TO DB:D")
})
const {data}=require('./db/data.json')


const userRoute=require('./routes/user.routes.js')
const currencyRouter=require('./routes/currencies.route.js')  
const {verifyAuth}=require('./middlewares/verifyauth.js')
// abover both file come from routes folder 

// const {getCurrencies,paramsCurrencies}=require('./controller/currencies.controller.js')
// the abover file transfer to route/currencies.route.js folder because of router
const app= express();

const PORT=8082

app.use(verifyAuth)

app.get("/" , (req,res)=> {
res.send("<h1> currency database</h1>");    
})
// app.get("/currencies",getCurrencies);   this file transfer to router and then converted to router.get 
// and in this location it gets converted into app.use 

// app.get("/" , this all transfer to controller folder this a copy 
// (req,res)=> {
//     res.send("<h1> currency database</h1>");
//     })
//     app.get("/currencies",(req,res)=>{
//         const {min_value}=req.query
//         const result= data.filter((ele)=>    
//             Number(ele.min_size)===Number(min_value))
//         if(min_value){
//           res.json(result)
//         }else{
//             res.json(data);
//         }

//     });


// app.get("/currencies/:symbol",paramsCurrencies) this file transfer to route/currencies.js



// app.get("/currencies/:symbol",
// from this all data shifted to currencies (req,res)=>{
//     const {symbol}=req.params
    
//       const result=data.find((ele)=> 
//             ele.id.toLowerCase()===symbol.toLowerCase()
//         )
//     if(result){
//         res.json(result)
//     }else{
//         res.status(404).json("invalid symbol")
//     }
//     })
    
app.use(express.json());
// above route for reading json tittle from body andthis is come from ./router.post


app.use("/currencies",currencyRouter)

// app.get("/user",userData)               this all routes transfer to routes/router.js folder
// app.get("/user/search",searchParam)        
// app.get("/user/:uuid",userParam)

app.use("/user",userRoute);
// so above function is app.get to app.use and userRoute is imported file from routes/user.route.js 
app.use("/blogs",blogRouter)


app.listen(PORT,()=>{
    console.log("list");
})


