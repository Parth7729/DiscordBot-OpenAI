
# A Discord bot integrated with OpenAI API

Trademate can be added to a discord server and can provide features of ChatGPT inside that discord server. 
Implemented 4 commands:
- $chat - responds to your messages
- $code - most efficient in giving codes
- $complete - efficient in writing blogs, articles, letters etc
- $edit - efficient in fixing the grammatical errors in a sentence

- Link: [Add to server](https://discord.com/api/oauth2/authorize?client_id=1118257120907903007&permissions=9070970932288&scope=bot%20applications.commands ) 🔗





## Screenshots

![App Screenshot](/Screenshot%20(106).png)

## Installation

Clone this repo, cd to cloned directory and run the following commands:

```bash
  npm install
  npm run dev
```
    
## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

`DISCORD_BOT_TOKEN`
`apiKey`


## Contributing

Contributions are always welcome!

You can append a new command by making a .js file in [commandHandlers](/handlers/commandHandlers) folder. 

It will be a custom js module which must export these 3 parameters: ```command, execute, description```.

```command``` will store the command string.

```execute``` is a function which has the logic for the command. It has 2 parameters- ```message``` ```args```.

```description``` it will have the description of the command.

Example code snippet:

```
const openai = require("./../../src/ai.js");

const command = "chat"; 
const description = "$chat : It will return the response for the given prompt. e.g. $chat <prompt>";

const execute = (message, agrs) => {
    //logic for the command
}

module.exports =  {command, execute, description};

```

Thank you
