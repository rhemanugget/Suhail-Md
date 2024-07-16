const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923184474176";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  " SUHAIL_16_44_07_16_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQ4LFxuICAgICAgICAxMSxcbiAgICAgICAgMzgsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMjAxLFxuICAgICAgICA2MixcbiAgICAgICAgMjUxLFxuICAgICAgICAyMDgsXG4gICAgICAgIDExNSxcbiAgICAgICAgMTIzLFxuICAgICAgICAyMDYsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMTYyLFxuICAgICAgICA0OSxcbiAgICAgICAgMTM5LFxuICAgICAgICAyMDcsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMTUxLFxuICAgICAgICAxMzYsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMTkwLFxuICAgICAgICAyMzAsXG4gICAgICAgIDUzLFxuICAgICAgICAxNzMsXG4gICAgICAgIDEwMixcbiAgICAgICAgMjAyLFxuICAgICAgICAyMDUsXG4gICAgICAgIDEsXG4gICAgICAgIDc1LFxuICAgICAgICA4NyxcbiAgICAgICAgMTY4LFxuICAgICAgICA2NFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNzIsXG4gICAgICAgIDExMixcbiAgICAgICAgMTIzLFxuICAgICAgICA3MCxcbiAgICAgICAgMTYwLFxuICAgICAgICA0MixcbiAgICAgICAgMjA0LFxuICAgICAgICA0NCxcbiAgICAgICAgMjI1LFxuICAgICAgICAxNzIsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMjQwLFxuICAgICAgICA2MyxcbiAgICAgICAgMTY5LFxuICAgICAgICAyNDEsXG4gICAgICAgIDIxNSxcbiAgICAgICAgNDcsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMTQyLFxuICAgICAgICAxNDIsXG4gICAgICAgIDIyMixcbiAgICAgICAgNjUsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMjM0LFxuICAgICAgICAxNzksXG4gICAgICAgIDI0MixcbiAgICAgICAgMjQwLFxuICAgICAgICAxMTYsXG4gICAgICAgIDg4LFxuICAgICAgICAxOTgsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMTA2XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNDQsXG4gICAgICAgIDIyNixcbiAgICAgICAgMTEwLFxuICAgICAgICAyMjMsXG4gICAgICAgIDg2LFxuICAgICAgICAxNDQsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMTI3LFxuICAgICAgICAxNTEsXG4gICAgICAgIDU1LFxuICAgICAgICAxMyxcbiAgICAgICAgMTg5LFxuICAgICAgICA2LFxuICAgICAgICA1NCxcbiAgICAgICAgMTQ0LFxuICAgICAgICA2NCxcbiAgICAgICAgMzgsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMTY4LFxuICAgICAgICAxMTIsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMjA4LFxuICAgICAgICAxOTksXG4gICAgICAgIDYsXG4gICAgICAgIDE3NixcbiAgICAgICAgOTEsXG4gICAgICAgIDE3MSxcbiAgICAgICAgNTMsXG4gICAgICAgIDI0NixcbiAgICAgICAgMjksXG4gICAgICAgIDYzLFxuICAgICAgICA3MFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA2MyxcbiAgICAgICAgODEsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMjA0LFxuICAgICAgICAxMDUsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMjQ4LFxuICAgICAgICAxNTMsXG4gICAgICAgIDQ1LFxuICAgICAgICAyNSxcbiAgICAgICAgMyxcbiAgICAgICAgMTc2LFxuICAgICAgICAxNzQsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMTE2LFxuICAgICAgICA5NixcbiAgICAgICAgMTc4LFxuICAgICAgICAxMDcsXG4gICAgICAgIDYzLFxuICAgICAgICAyMzQsXG4gICAgICAgIDQ2LFxuICAgICAgICAyMjIsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMjI0LFxuICAgICAgICAyMjMsXG4gICAgICAgIDMyLFxuICAgICAgICAxODcsXG4gICAgICAgIDExMSxcbiAgICAgICAgODIsXG4gICAgICAgIDg4LFxuICAgICAgICAxMzksXG4gICAgICAgIDEwM1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTY4LFxuICAgICAgICAyMTYsXG4gICAgICAgIDIyMyxcbiAgICAgICAgNjgsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMTQ0LFxuICAgICAgICAxMjYsXG4gICAgICAgIDIwLFxuICAgICAgICAyNTUsXG4gICAgICAgIDE0NixcbiAgICAgICAgMjE2LFxuICAgICAgICAxNDEsXG4gICAgICAgIDc1LFxuICAgICAgICA5MyxcbiAgICAgICAgMTI1LFxuICAgICAgICAxMjYsXG4gICAgICAgIDE3NCxcbiAgICAgICAgNDYsXG4gICAgICAgIDE4MixcbiAgICAgICAgNzQsXG4gICAgICAgIDQwLFxuICAgICAgICAxMzYsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMjM3LFxuICAgICAgICA1NSxcbiAgICAgICAgNzAsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMTEsXG4gICAgICAgIDEyMCxcbiAgICAgICAgOTksXG4gICAgICAgIDI1MCxcbiAgICAgICAgODBcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQyLFxuICAgICAgICAxMTYsXG4gICAgICAgIDEyNyxcbiAgICAgICAgODEsXG4gICAgICAgIDEzLFxuICAgICAgICAxNDgsXG4gICAgICAgIDE5NSxcbiAgICAgICAgNDMsXG4gICAgICAgIDE3NyxcbiAgICAgICAgODQsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMTczLFxuICAgICAgICA4NSxcbiAgICAgICAgMTc0LFxuICAgICAgICAxMSxcbiAgICAgICAgNTQsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMjI1LFxuICAgICAgICAxMyxcbiAgICAgICAgMTU3LFxuICAgICAgICAyMyxcbiAgICAgICAgMTgzLFxuICAgICAgICA2NSxcbiAgICAgICAgMTYyLFxuICAgICAgICAxMjcsXG4gICAgICAgIDcwLFxuICAgICAgICA0MCxcbiAgICAgICAgMTk5LFxuICAgICAgICAyNDgsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMTkyLFxuICAgICAgICA5XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE4NCxcbiAgICAgICAgICAyNDYsXG4gICAgICAgICAgNjMsXG4gICAgICAgICAgMjE0LFxuICAgICAgICAgIDIwNixcbiAgICAgICAgICAxNzksXG4gICAgICAgICAgMjMzLFxuICAgICAgICAgIDE0MixcbiAgICAgICAgICAxMjgsXG4gICAgICAgICAgMTY5LFxuICAgICAgICAgIDY3LFxuICAgICAgICAgIDU2LFxuICAgICAgICAgIDQ5LFxuICAgICAgICAgIDgzLFxuICAgICAgICAgIDEwMCxcbiAgICAgICAgICAzMCxcbiAgICAgICAgICAxOTQsXG4gICAgICAgICAgOTcsXG4gICAgICAgICAgMjMwLFxuICAgICAgICAgIDExMyxcbiAgICAgICAgICAxMjgsXG4gICAgICAgICAgMTI1LFxuICAgICAgICAgIDgwLFxuICAgICAgICAgIDE1OSxcbiAgICAgICAgICAyMSxcbiAgICAgICAgICAxODAsXG4gICAgICAgICAgMTU4LFxuICAgICAgICAgIDQ5LFxuICAgICAgICAgIDEyMixcbiAgICAgICAgICA2MCxcbiAgICAgICAgICA3MyxcbiAgICAgICAgICAxMTRcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjUsXG4gICAgICAgICAgMjE3LFxuICAgICAgICAgIDE1OSxcbiAgICAgICAgICAxNSxcbiAgICAgICAgICA3NCxcbiAgICAgICAgICAxNTcsXG4gICAgICAgICAgMTMwLFxuICAgICAgICAgIDg3LFxuICAgICAgICAgIDEwOCxcbiAgICAgICAgICAxOTYsXG4gICAgICAgICAgMTgzLFxuICAgICAgICAgIDI0OCxcbiAgICAgICAgICA1OCxcbiAgICAgICAgICA3OCxcbiAgICAgICAgICAyMDMsXG4gICAgICAgICAgNTAsXG4gICAgICAgICAgMTA5LFxuICAgICAgICAgIDIyNSxcbiAgICAgICAgICAyMTMsXG4gICAgICAgICAgMTY1LFxuICAgICAgICAgIDAsXG4gICAgICAgICAgMjA0LFxuICAgICAgICAgIDE0NCxcbiAgICAgICAgICAxODksXG4gICAgICAgICAgNTYsXG4gICAgICAgICAgMTE1LFxuICAgICAgICAgIDIwMCxcbiAgICAgICAgICAxNDUsXG4gICAgICAgICAgMTUyLFxuICAgICAgICAgIDIxNSxcbiAgICAgICAgICAxNjAsXG4gICAgICAgICAgNDdcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNCxcbiAgICAgICAgOTIsXG4gICAgICAgIDcsXG4gICAgICAgIDU2LFxuICAgICAgICA2OSxcbiAgICAgICAgMTgsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMjUxLFxuICAgICAgICA0LFxuICAgICAgICAyMDIsXG4gICAgICAgIDE2MixcbiAgICAgICAgMjE2LFxuICAgICAgICAxMjYsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMjM2LFxuICAgICAgICA1MSxcbiAgICAgICAgMjUzLFxuICAgICAgICAyOCxcbiAgICAgICAgMjA3LFxuICAgICAgICAxMjMsXG4gICAgICAgIDI0NCxcbiAgICAgICAgOCxcbiAgICAgICAgMTY1LFxuICAgICAgICAyMTUsXG4gICAgICAgIDAsXG4gICAgICAgIDE5NyxcbiAgICAgICAgNzYsXG4gICAgICAgIDIwMixcbiAgICAgICAgMTc1LFxuICAgICAgICAxNCxcbiAgICAgICAgMTg2LFxuICAgICAgICA2NSxcbiAgICAgICAgMjUxLFxuICAgICAgICAxMjIsXG4gICAgICAgIDE0NixcbiAgICAgICAgMTY3LFxuICAgICAgICAxOTgsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMjM1LFxuICAgICAgICAxNjMsXG4gICAgICAgIDEzNixcbiAgICAgICAgNCxcbiAgICAgICAgMzksXG4gICAgICAgIDIxOCxcbiAgICAgICAgMTU0LFxuICAgICAgICAyMjQsXG4gICAgICAgIDg5LFxuICAgICAgICA0NyxcbiAgICAgICAgMTk2LFxuICAgICAgICAzMSxcbiAgICAgICAgNDgsXG4gICAgICAgIDE2NixcbiAgICAgICAgNDAsXG4gICAgICAgIDEyLFxuICAgICAgICAxNjAsXG4gICAgICAgIDUxLFxuICAgICAgICAxMDEsXG4gICAgICAgIDUyLFxuICAgICAgICAxNzksXG4gICAgICAgIDE5NyxcbiAgICAgICAgMjksXG4gICAgICAgIDE3MCxcbiAgICAgICAgMjQ2LFxuICAgICAgICAzXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiA5NCxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCI5TGtMK1M3bTd2UTRVckZqT1I0L0FyUVI5MGtmKzloWkN1cDBwdHd3MUFZPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjE5Mjk2MDg2NzQ0QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCIzQUNCMkY1NTAyRDk0MUJGOTg2RlwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MjExNDgyODVcbiAgICB9LFxuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCIxOTI5NjA4Njc0NEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiM0E2MTc2NjdGMDgwNzU0OTE4NENcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzIxMTQ4Mjg3XG4gICAgfVxuICBdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMSxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIkI4OXJuVC1EU3N5S2VQTkVRLUx6M1FcIixcbiAgXCJwaG9uZUlkXCI6IFwiOWEyNDBjYWItOTM5Yy00MTI4LThmMTAtZTJhYjdlM2JlMTY3XCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDEwMixcbiAgICAgIDExMCxcbiAgICAgIDE4NixcbiAgICAgIDIyNSxcbiAgICAgIDE2NSxcbiAgICAgIDI5LFxuICAgICAgMTgxLFxuICAgICAgMTU2LFxuICAgICAgMTUsXG4gICAgICA1NSxcbiAgICAgIDcwLFxuICAgICAgMTUsXG4gICAgICAyMzgsXG4gICAgICA5NCxcbiAgICAgIDIyMSxcbiAgICAgIDQ2LFxuICAgICAgNyxcbiAgICAgIDU2LFxuICAgICAgMjE5LFxuICAgICAgMTlcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgNDksXG4gICAgICAxMTEsXG4gICAgICAxMTMsXG4gICAgICAzNSxcbiAgICAgIDE4NSxcbiAgICAgIDg3LFxuICAgICAgMTc0LFxuICAgICAgODUsXG4gICAgICA1LFxuICAgICAgMzYsXG4gICAgICAxODcsXG4gICAgICAxNzMsXG4gICAgICA1NixcbiAgICAgIDE3NyxcbiAgICAgIDEwMCxcbiAgICAgIDM3LFxuICAgICAgMjQwLFxuICAgICAgNjEsXG4gICAgICAxLFxuICAgICAgODZcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiS1I3QzJTM0NcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjE5Mjk2MDg2NzQ0OjE5QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIxOTQ2MTM2NTg3Nzk3NTg6MTlAbGlkXCIsXG4gICAgXCJuYW1lXCI6IFwiSGVucnlcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNMNzdwWUFIRVBmRzJyUUdHQUlnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcInpiUDlaMk9UY253UFBWaFVEM2hpZE1EQlVBd3pBS1RWRVlaeitqUG1GQUE9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiU0x4U1dzMDU0ZmpnSEdiQzh2TUduN1QvcjhYN2ZYZzZLbUI3OFNiUEw3a2lIWk94ZFRUaVMzR0NDcVJwK2dKT3RSOXh3dmNZNmhrT21Xa2JsSWdiQUE9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiY3Q5Nno1bHJ3SFM3dTJRb1lpMm9sekhlSjVVQ1dsQ21wRzErN0pCb2JpQzZwaUl2T3JnK25DYnhwUFpWdnkvNXRFMThSY1BCM242c2VSbTJ6VGFyRGc9PVwiXG4gIH0sXG4gIFwi"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
