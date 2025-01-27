const router =require('express').Router();

const {getCurrencies,paramsCurrencies}=require('../controller/currencies.controller.js')
// abover file imported from index .js and then transfer in this fiolder 

// this is transfer from index.js file and app is converted in router 


// ("/currencies/currencies") currencies is prefix so it remove and remain /
    router.get("/",getCurrencies);

    // ("/currencies/currencies/:symbol") currencies is prefix so it remove and remain /currencies

    router.get("/:symbol",paramsCurrencies)

    module.exports=router