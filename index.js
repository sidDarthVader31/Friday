const dotenv=require('dotenv');
dotenv.config()


//initialize twitter

const twit=require('./helper/auth');

//initialize streams 
const streams=require('./helper/search');

streams(twit);

