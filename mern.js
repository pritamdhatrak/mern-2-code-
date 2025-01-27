const http=require('http');
const axios = require("axios");
// const data=require('./data.json')



//     // res.writeHead(200,{"content-type":"application/json"})
//     // res.write("json.stringify(data)")
//   const date=new Date().toLocaleDateString()
//   const time=new Date().toLocaleTimeString()
//    console.log(`the time and date is${date}${time}`)
// // console.log("hello")
// res.end
                                                                                                                                           

// const serverInfo = {
//   serverName: "Crio Server",
//   version: "1.0.0",
//   currentDate: new Date().toDateString(),
//   currentTime: new Date().toTimeString(),
// };
// res.writeHead(200,{"content-type":"application/json"})
// res.write(JSON.stringify(serverInfo))
// res.end()
// })

const server = http.createServer(async(req,res)=>{
switch(req.url){
  case "/":
   res.writeHead(200,{"content-typr":"text/html"});
  res.write("<h1> currency database</h1>")
  res.end();
  break
  

  case "/currencies":
   
    try{
      const response =await axios.get("https://api.coinbase.com/v2/currencies");
      res.writeHead(200,{"content-type":"application/json"})
     res.write(JSON.stringify(response.data));
     res.end();
     break;   
  
    }catch(error){
      res.writeHead(404)
      res.write("something went wrong");
      res.end()
    }

   

}
})

server.listen(8082,()=>{
console.log("listen")
})