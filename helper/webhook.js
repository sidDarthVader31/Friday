const {Autohook}=require('twitter-autohook');
const incomingMessge=require('./incomingMessage');
module.exports=async(twit)=>{
  try{
    const webHook =new Autohook({
        token: process.env.access_key,
        token_secret: process.env.access_secret,
        consumer_key: process.env.consumer_key,
        consumer_secret: process.env.consumer_secret,
        env: process.env.env,
        port: process.env.PORT
      });

     await webHook.removeWebhooks();

    webHook.on('event', async event => {
       
      try{
        await incomingMessge(twit,event);
      }
      catch(e){
          console.log("error:",e.toString());
      }
      });
    await webHook.start();
    await webHook.subscribe({oauth_token: process.env.access_key, oauth_token_secret: process.env.access_secret});  
  }
  catch(e){
      console.log("error:",e.toString());
  }
}