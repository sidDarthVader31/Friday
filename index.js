const dotenv=require('dotenv');
dotenv.config()


//initialize twitter

const twit=require('./helper/auth');
const webhook=require('./helper/webhook');
//initialize streams 
const streams=require('./helper/search');

streams(twit).then((val)=>{

})
.catch((e)=>{
    console.log('error:Streams',e.toString());
})

 webhook(twit)
 .then((val)=>{
     console.log("function executed");
 })
 .catch((e)=>{
     console.log(`error:${e.toString()}`);
 })
