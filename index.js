const dotenv=require('dotenv');
dotenv.config()


//initialize twitter

const twit=require('./helper/auth');
const webhook=require('./helper/webhook');
//initialize streams 
const streams=require('./helper/search');

streams(twit);

 webhook(twit)
 .then((val)=>{
     console.log("function executed");
 })
 .catch((e)=>{
     console.log(`error:${e.toString()}`);
 })
