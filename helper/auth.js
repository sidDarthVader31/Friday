const config=require('../config/twitterConfig');
const twig=require('twit');
const t=new twig(config);

module.exports=t;
