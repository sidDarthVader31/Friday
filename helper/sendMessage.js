/**
 * Author:Siddharth Bisht
 * Description: function to send messages 
 */



 module.exports=async(message,senderId,twit,senderName)=>{
    let postbody= {
        event: {
          type: 'message_create',
          message_create: {
            target: {
              recipient_id: senderId,
            },
            message_data: {
              text: message,
            },
          },
        },
      };

     // console.log("post body:",JSON.stringify(postbody));
    twit.post('direct_messages/events/new',postbody,(error,response,message)=>{
        return new Promise((resolve,reject)=>{
            if(error){
                reject(error);
            }
            resolve(response,message);
        })
    })
 }

 