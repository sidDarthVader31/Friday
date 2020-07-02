/**
 * Author:Siddharth Bisht
 * Description: to follow a user 
 * 
 * 
 */



module.exports=async function(id,twit){
    twit.post('friendships/create',{user_id:id,follow:true},(error,result,messages)=>{
        return new Promise((resolve,reject)=>{
            if(error){
                console.log("error:",error);
                reject(error);
            }
            // console.log("result:",result);
            // console.log("*********************************************************************");
            // console.log("message:",messages);
            resolve(result,messages);
        });
    })
}