const openai = require("./../../src/ai.js");

const command = "edit";
const description = "$edit : Creates a new edit for the provided input and instruction. Instruction and input should be enclosed in '~'. e.g. $edit ~instruction~ ~input~";

const execute = async (message, args) => {
    if(args.length === 0) {
        await message.reply("Please provide an input");
    }

    else {
        try {
            let instruc = args[0];
            let inp = "";
            if(args.length === 2) inp = args[1];
            const response = await openai.createEdit({
                model : "text-davinci-edit-001",
                input : inp,
                instruction : instruc,
                temperature : 2
            });
            await message.reply(response.data.choices[0].text);
        }
        catch(err) {
            try{
                await message.reply("please try another command e.g. - $chat");
                console.log("no response from openAI on edit command");
            }
            catch(err) {
                console.log(err);
            }
        }
        
    }

}



module.exports =  {command, execute, description};