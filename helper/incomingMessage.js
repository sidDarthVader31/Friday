/**
 * Author:Siddharth Bisht
 * Description: Handle account activity events
 */

const sendMessage = require("./sendMessage");
const follow=require('./follow');
module.exports = async (twit, event) => {
    //send a message
    // We check that the message is a direct message
    if (!event.direct_message_events) {
      return;
    }

    // Messages are wrapped in an array, so we'll extract the first element
    //  check that the message is valid
    const message = event.direct_message_events.shift();
    if (typeof message === "undefined" ||typeof message.message_create === "undefined"
    ) {
      return;
    }
    //  console.log("message:",JSON.stringify(message));
    //  console.log("messageCreate:",JSON.stringify(message.message_create));

    // filter out message you send, to avoid an infinite loop
    if (message.message_create.sender_id ===message.message_create.target.recipient_id) {
      return;
    }
    else{
        let reply=handleIncomingMessage(message.message_create,event.users[message.message_create.sender_id].screen_name, message.message_create.sender_id,twit);
        // console.log("reply:",reply);
        // console.log("screenname:",event.users[message.message_create.sender_id].screen_name);
        try{
            await sendMessage(reply, message.message_create.sender_id,twit,event.users[message.message_create.sender_id].screen_name);
        }
        catch(e){
            console.log("error?:",e.toString());
        }
        //`messageCreate: {"target":{"recipient_id":"1278273884903505921"},"sender_id":"1128519436061667328","message_data":{"text":"Hello","entities":{"hashtags":[],"symbols":[],"user_mentions":[],"urls":[]}}}
    }

};

const handleIncomingMessage=function(message_data,senderName,senderId,twit){
    let message =message_data.message_data.text;   
    if(message.toLowerCase().includes('hello')){
        message=`Hey ${senderName} always remember they are people who care about you. If you are feeling low, talk to them \n and I love you 3000 ❤️ *3000 `
    }

    else if(message.toLowerCase().includes('follow')){
        message="Hey , I'll follow you right away";
        if(senderId!="1278273884903505921"){
            follow(senderId,twit).then(()=>{
                console.log("done");
            })
            .catch(e=>{
                console.log("Error:",e.toString());
            })
        }
    }
    else{
        message=`Sorry ${senderName}, I cannot reply to this message, maybe Jarvis could but he is no more!!`;
    }
    return message;
}
