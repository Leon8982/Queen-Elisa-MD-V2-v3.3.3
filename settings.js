/*
 █▀▀█ █░▒█ █▀▀▀ █▀▀▀ █▄░▒█       █▀▀▀ █░░░ ▀█▀ █▀▀▀█ █▀▀█
 █░▒█ █░▒█ █▀▀▀ █▀▀▀ █▒█▒█       █▀▀▀ █░░░ ░█░ ▀▀▀▄▄ █▄▄█
 ▀▀█▄ ▀▄▄▀ █▄▄▄ █▄▄▄ █░░▀█       █▄▄▄ █▄▄█ ▄█▄ █▄▄▄█ █░▒█

WHATSAPP BOT BY MR NIMA ( DARK MAKER OFC )

WHATSAPP - 918982860407
WEB SITE - http://queenelisa.42web.io/
SUPPORT GROUP - https://t.me/queenelisasupport
YOUTUBE - http://youtube.com/MRNIMAOFC


*/

const fs = require('fs')
const chalk = require('chalk')


/*
⚙️ BOT SETTINGS  ⚙️
*/
//👇 if you need seen massage use " true "
global.READ_MASSAGE = true
//👇 enable desable Girls Voice Reply
global.VOICE_REPLY = false
//👇 Do you want show time on your bio use "true" want desable use "false"
global.AUTO_BIO = true
//👇 Inbox massage block PM block
global.INBOX_BLOCK = true
//👇 Auto react 
global.AUTO_REACT = true
//👇 Bad word Auto delete ( you must add bad words )
global.ANTI_BADWORD = true
//👇 Kick And Auto Delete Group link Senders
global.ANTI_G_LINK = true
//👇 212 Number block
global.NUMBER_212_BLOCK = true
//👇 Send Welcome ( true or false )
global.SEND_WELCOME = process.env.SEND_WELCOME || true
//👇 Send block command message (true or false )
global.BLOCK_CMD_MESSAGE_SEND = true
//👇 Send Auto reply , sticker , voice Use true and costemize your own 
global.AUTO_FUNCTION = true
//👇 Put Bot Offline
global.BOT_OFFLINE = true
//👇 Only PreFix [ true / false ]
global.ONLY_PREFIX = false
//👇 This uplaod youtube videos without limit ⚠️ if you use this you must have paid sever
global.UPLOAD_MAX = true
/*
       ✨ BOT INFO SETTINGS ✨
*/
// You Bots Owner Number 
global.owner = ['918982860407'] 
//👇 Your Caption ( Image Video )
global.cap = '*© 𝙶𝙴𝙽𝙴𝚁𝙰𝚃𝙴𝙳 𝙱𝚈 𝙴𝙻𝙸𝚂𝙰 𝙼𝙰𝚇 𝙱𝙾𝚃*'
//👇 Your Bot Name
global.botnma =  '*DASA<3' 
//👇 Your name
global.ownernma =  '*LEON🖤*' 
//👇 Sticker Author Name
global.packname =  'DASA<3' 
//👇 Inbox Block Massage 
global.INBOX_BLOCK_MSG = 'Do not text Bot your number will be blocked in 5seconds !!!'
//👇 Owner React Imoji
global.OWNER_REACT =  '💻'
//👇 Song Download Massage 
global.SONG_DOWN = '```⬇️ Downloading Your Song...```' 
//👇 Song Uplode massage 
global.SONG_UP = '```⬆️ Uploding Your Song...```'
//👇 Menu imoji 
global.MENU_IMOJI = '👸|ℹ️'
//👇 Your time zone ( use correct time zone )
global.TIME_ZONE = process.env.TIME_ZONE || 'Africa/Blantyre'
//👇 Removebg Api key
global.REMOVE_BG_API = 'apikey get on remoebg.com'
//👇 Pron Video Download 
global.SEX_VIDEO_DOWNLOAD = process.env.SEX_VIDEO_DOWNLOAD || 'false'
//👇 Change Bot Language 
global.LANG = 'EN'
//Alive logo
global.alivelogo = process.env.ALIVE_IMAGE || `https://telegra.ph/file/b0f1e7622f1e11f1bbd6d.jpg`
//👇 Alive message
global.ALIVE_MESSAGE = process.env.ALIVE_MESSAGE || `Hello Elisa Max Bot is online`
//👇 Welcome Mesaage
global.WELCOME = process.env.WELCOME || ``
//👇 welcome image 
global.WELCOME_IMAGE = process.env.WELCOME_IMAGE || ``
//👇 Goodbye message 
global.GOODBYE = process.env.GOODBYE || ``
//👇 Good bye image
global.GOODBYE_IMAGE = process.env.GOODBYE_IMAGE || ``
//👇 Desable PM Block numbers
global.NO_BLOCK = ["918982860407","917861093341"]
//👇 Desable download words
global.IMG_BLOCKER = ["abuse"]
//👇 Open ai API
global.CHATGPT_API = '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'
/*

   🍃 OTHER 🍃

*/
global.S_CAP = ''
global.V_CAP = ''
global.YT_CAP = ''
global.PORT = '8000'
global.zenzapi = '01ABEB1E11'
/*

💬 MESSAGE 💬

*/
global.mess = {
    success: '✅ Done!',
    admin: '*Only admins can use this command !*',
    botAdmin: '*Please admin the bot first !*',
    owner: '*Sorry, this command is only for the owner !*',
    group: '*This command can only be used in groups !*',
    private: '*This command can only be used in Inbox !*',
    bot: '*This command can only be used by bot number !*',
    wait: '*♲ Please Wait i am processing your request ...*',
    endLimit: 'Your Daily Limit Has Expired, The Limit Will Be Reset Every 12 Hours',
    BLOCK_CMD_MSG : '*⚠️ This Command is Block By Owner*',
    IMG_BLOCK : "This Word is Ban from image downloader",
    BAD_DETECT : '',
    BLOCK : '',
    UNBLOCK : '',
    KICK : '',
    ADD : '',
    LEAVE : '',
    PROMOTE : '',
    DEMOTE : ''
}




//other
global.pemilik = ['918982860407'] //Change  it , ඔබට කැමති නම් වෙනස් කරන්න
global.premium = ['918982860407'] //Change it ඔබට කැමතිනම් වෙනස් කරන්න 
global.pengguna = 'Austin Max' // Your name ඔබේ නම 
global.sessionName = 'session'
global.prefix = ['.'] 
global.sp = '👽'
global.weem = 'AUSTIN MAX'

global.limitawal = {
    premium: "Infinity", 
    free: 15
}
//global api
global.fbapi = 'dd79-1aeb-21a3'
global.APIs = {
	zenz: 'https://zenzapi.xyz', 
}
global.APIKeys = {
	'https://zenzapi.xyz': '01ABEB1E11', //Kalau habis beli sendiri
}

//global.alivelogo = `https://telegra.ph/file/b0f1e7622f1e11f1bbd6d.jpg`
global.imgalive = fs.readFileSync('./Media/image/Elisa.jpg')
let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
