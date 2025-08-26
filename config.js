const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "ARSLAN-MD~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiY04wblkzSWs0c1kzYWZPRDF3ZUZTVFFJbVE5MWJjVWNzNUdCZ3ZBY2NFTT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoidFUzOWwrOENFQkxraGFXYy9kdE9LVWRJVjdlWmZkbnVGL0hLaUtRUHBFZz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIyQStpcUtDVWp6QWRBRW4xQk1xcTJRWlo1Tlh0UW5DRmlCMzFFMS9kZ0cwPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJnTU5sSHJETnZ2KzYxRVpudjZZVVJ6b0FZTDNEdFFKcXJZUFk5NG1XeENJPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImFHTWQvaFRIS284Tk03ckNOSGJncGJ4cktvN3ljT1hicDR1blFVelhnMFE9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjFmZTlHVS9hak9uaE54SUpTZngvdmNyU2pKSXNXeFEyNGtGOWRDRDFFelk9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiK0xqOVV4VGUrb3ZtRjQyWGZ5T3prR3I1RWllbnhDMWtYeldsTjg1V3RYND0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiSEJKa2dLUG9LOHZHZ29JWDJOUGlpeHZFbjQ3a1ByL3kwRDI5bytmVDhFWT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InZ2UEUxWXdFWEE3dGJ5STg0dE9TM2Y5V1M1cGx6b2VjRU91cGhRTHcrWlFNek9SMDYzb1FGTHFzdTVoSi9zSFprYzMwN1pndko5SWlGVnpLenBrNmp3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6OCwiYWR2U2VjcmV0S2V5IjoidjJwT2RueHB0VEp2QXpUT0FCeEcrV21SUkpYK0g2Z3NLenhrK2MxcDJTQT0iLCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXMiOlt7ImtleSI6eyJyZW1vdGVKaWQiOiI5NDcxMzc1NjM2OEBzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiJEOUQ4MkM2NjY1QjVCODg2OTY0MzcwNDEyM0RBNUZCQSJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzU2MjIwMDMwfV0sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwicmVnaXN0ZXJlZCI6dHJ1ZSwicGFpcmluZ0NvZGUiOiI3WjEyWFk3SyIsIm1lIjp7ImlkIjoiOTQ3MTM3NTYzNjg6MTFAcy53aGF0c2FwcC5uZXQiLCJsaWQiOiIyOTI1NDU5OTQ3NjY5OjExQGxpZCJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDUFA3N2JJRUVQaVV0OFVHR0FZZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiaHV4RkN6cmJ6NngzWmdGOERkczRTcnAyVW1QcGJIcTB6MWFVRktybnBsYz0iLCJhY2NvdW50U2lnbmF0dXJlIjoiZGlYK0VqTTIxb3lkTXF1Sk1laTFxMWEvdE1IUlhQWElKZFJDT1VMRTZlV0sxRC8yMmZKQm1rK2svcWtoOHoxYWZnQitSTTVnbzNMK1BEMUhDZU9ZQ0E9PSIsImRldmljZVNpZ25hdHVyZSI6ImNnWWRuK0J4KzViTG9KZnh1Q2hLZWo2YUVIR1BOVSs3ODVNclNzQks5SHZnWWwyblV2OEd2MjVkaWJmUnRpRi9xa0hWQkxCTThXWDFqS1dWNGd1bmdnPT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiOTQ3MTM3NTYzNjg6MTFAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCWWJzUlFzNjI4K3NkMllCZkEzYk9FcTZkbEpqNld4NnRNOVdsQlNxNTZaWCJ9fV0sInBsYXRmb3JtIjoiYW5kcm9pZCIsInJvdXRpbmdJbmZvIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQ0JJSUJRPT0ifSwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzU2MjIwMDI3LCJsYXN0UHJvcEhhc2giOiIxSzRoSDQiLCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQURyViJ9",
// add your Session Id 
AUTO_STATUS_SEEN: process.env.AUTO_STATUS_SEEN || "true",
// make true or false status auto seen
AUTO_STATUS_REPLY: process.env.AUTO_STATUS_REPLY || "false",
// make true if you want auto reply on status 
AUTO_STATUS_REACT: process.env.AUTO_STATUS_REACT || "true",
// make true if you want auto reply on status 
AUTO_STATUS_MSG: process.env.AUTO_STATUS_MSG || "*SEEN YOUR STATUS BY Danuzz-MD 🤍*",
// set the auto reply massage on status reply  
ANTI_DELETE: process.env.ANTI_DELETE || "true",
// set true false for anti delete     
ANTI_DEL_PATH: process.env.ANTI_DEL_PATH || "inbox", 
// change it to 'same' if you want to resend deleted message in same chat     
WELCOME: process.env.WELCOME || "true",
// true if want welcome and goodbye msg in groups    
ADMIN_EVENTS: process.env.ADMIN_EVENTS || "false",
// make true to know who dismiss or promoted a member in group
ANTI_LINK: process.env.ANTI_LINK || "true",
// make anti link true,false for groups 
MENTION_REPLY: process.env.MENTION_REPLY || "false",
// make true if want auto voice reply if someone menetion you 
MENU_IMAGE_URL: process.env.MENU_IMAGE_URL || "https://github.com/Danidudanesh/Danuzz-MD/blob/main/LOGo/1.png?raw=true",
// add custom menu and mention reply image url
PREFIX: process.env.PREFIX || ".",
// add your prifix for bot   
BOT_NAME: process.env.BOT_NAME || "Danuzz-MD",
// add bot namw here for menu
STICKER_NAME: process.env.STICKER_NAME || "Danuzz-MD",
// type sticker pack name 
CUSTOM_REACT: process.env.CUSTOM_REACT || "false",
// make this true for custum emoji react    
CUSTOM_REACT_EMOJIS: process.env.CUSTOM_REACT_EMOJIS || "💝,💖,💗,❤️‍🩹,❤️,🧡,💛,💚,💙,💜,🤎,🖤,🤍",
// chose custom react emojis by yourself 
DELETE_LINKS: process.env.DELETE_LINKS || "false",
// automatic delete links witho remove member 
OWNER_NUMBER: process.env.OWNER_NUMBER || "94713756368",
// add your bot owner number
OWNER_NAME: process.env.OWNER_NAME || "*Danidu Danesh*",
// add bot owner name
DESCRIPTION: process.env.DESCRIPTION || "*© ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴅᴀɴɪᴅᴜ ᴅᴀɴᴇsʜ ❣️*",
// add bot owner name    
ALIVE_IMG: process.env.ALIVE_IMG || "https://github.com/Danidudanesh/Danuzz-MD/blob/main/LOGo/1.png?raw=true",
// add img for alive msg
LIVE_MSG: process.env.LIVE_MSG || "> Hey Dear, Danuzz-MD is Alive Now ⚡",
// add alive msg here 
READ_MESSAGE: process.env.READ_MESSAGE || "false",
// Turn true or false for automatic read msgs
AUTO_REACT: process.env.AUTO_REACT || "false",
// make this true or false for auto react on all msgs
ANTI_BAD: process.env.ANTI_BAD || "false",
// false or true for anti bad words  
MODE: process.env.MODE || "public",
// make bot public-private-inbox-group 
ANTI_LINK_KICK: process.env.ANTI_LINK_KICK || "false",
// make anti link true,false for groups 
AUTO_STICKER: process.env.AUTO_STICKER || "false",
// make true for automatic stickers 
AUTO_REPLY: process.env.AUTO_REPLY || "false",
// make true or false automatic text reply 
ALWAYS_ONLINE: process.env.ALWAYS_ONLINE || "false",
// maks true for always online 
PUBLIC_MODE: process.env.PUBLIC_MODE || "true",
// make false if want private mod
AUTO_TYPING: process.env.AUTO_TYPING || "false",
// true for automatic show typing   
READ_CMD: process.env.READ_CMD || "false",
// true if want mark commands as read 
DEV: process.env.DEV || "94713756368",
//replace with your whatsapp number        
ANTI_VV: process.env.ANTI_VV || "true",
// true for anti once view 
AUTO_RECORDING: process.env.AUTO_RECORDING || "false"
// make it true for auto recoding 
};
