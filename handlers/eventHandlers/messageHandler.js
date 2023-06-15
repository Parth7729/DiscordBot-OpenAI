const PREFIX = "$";
const SEPARATOR = '~';

const bot = require("./../../src/bot.js");
const {commands} = require("./../../src/loadCommands.js");


const messageHandler = (message) => {
    
    const {isValidated, replyMessage, command, args} = messageValidate(message);

    console.log(isValidated, replyMessage, command, args);

    if(!isValidated) {
        console.log(replyMessage);
        return;
    }

    const check = commands.get(command);
    
    if(!check) {
        message.reply("invalid command");
        return;
    }

    const handler = commands.get(command).execute;

    handler(message, args);

};


function messageValidate(message) {
    const res = {isValidated : true, replyMessage : "validated", command : "", args : []};
    const msg = message.content;

    if(message.author.bot) {
        res.isValidated = false;
        res.replyMessage = "Message sent by a Bot."
    } else if(!msg.startsWith(PREFIX)) {
        res.isValidated = false;
        res.replyMessage = "Not a command."
    } else {
        const [ cmd, ...arr ] = msg.trim().substring(PREFIX.length).split(/\s+/);
        const txt = arr.join(" ");
        res.command = cmd;
        const args = splitForEdit(txt);
        if(txt !== "") {
            if(args.flag === true) res.args = args.res;
            else {
                res.isValidated = false;
                res.replyMessage = "invalid input";
            }
        }
            
        
    }

    return res;
    
}


function splitForEdit(text) {
    const indices = [], res = [];
    let flag = false;
    for(let i = 0; i<text.length; i++) {
        if(text.charAt(i) == SEPARATOR) indices.push(i);
    }

    if(indices.length === 0 || indices.length === 2 || indices.length === 4) {
        if(indices.length === 0)
            res.push(text.trim());
        else if(indices.length === 2) {
            res.push(text.substring(indices[0]+1, indices[1]).trim());
        }
        else {
            res.push(text.substring(indices[0]+1, indices[1]).trim());
            res.push(text.substring(indices[2]+1, indices[3]).trim());
        }

        flag = true;
    }

    return {res, flag};

}

module.exports = {messageHandler};