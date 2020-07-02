/**
 * Author:Siddharth Bisht
 * Desc: file that creates a twitter search stream which checks for events for a specific keyword search 
 */
  const retweet=require('./retweet');
  const streamFunc=async(twit)=>{

        const JSstream=twit.stream('statuses/filter',{track:"#javascript"});
        JSstream.on('tweet',async (tweet)=>{
            try{
                await retweet(tweet.id_str,twit);
            }
            catch(e){
                console.log(`error:js":${e.toString()}`);
            }
        });
        const TSstream=twit.stream('statuses/filter',{track:"#TypeScript"});
        TSstream.on('tweet',async (tweet)=>{
            try{
                await retweet(tweet.id_str,twit);
            }
            catch(e){
                console.log(`error:js":${e.toString()}`);
            }
        });
        const nodeJsStream=twit.stream('statuses/filter',{track:"#Nodejs"});
        nodeJsStream.on('tweet',async (tweet)=>{
            try{
                await retweet(tweet.id_str,twit);
            }
            catch(e){
                console.log(`error:js":${e.toString()}`);
            }
        });

  
  }
  module.exports=streamFunc;