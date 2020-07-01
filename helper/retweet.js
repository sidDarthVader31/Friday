
/**\
 * Author:Siddharth Bisht
 * Description: retweet function 
 */



//const twit=require('./auth');
module.exports=async function(id,twit){
    twit.post('statuses/retweet/:id',{id:id},(error,result,messages)=>{
        return new Promise((resolve,reject)=>{
            if(error){
                console.log("error:",error);
                reject(error);
            }
            console.log("data:",result);
            console.log("messages:",messages);
            resolve(result,messages);
        });
    })
}

