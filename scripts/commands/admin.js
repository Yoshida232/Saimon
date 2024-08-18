
module.exports.config = {
    name: "admin",
    version: "1.0.0",
    permission: 0,
    credits: "nayan",
    prefix: true,
    description: "",
    category: "prefix",
    usages: "",
    cooldowns: 5,
    dependencies: 
	{
    "request":"",
    "fs-extra":"",
    "axios":""
  }
};
module.exports.run = async function({ api,event,args,client,Users,Threads,__GLOBAL,Currencies }) {
const axios = global.nodemodule["axios"];
const request = global.nodemodule["request"];
const fs = global.nodemodule["fs-extra"];
const time = process.uptime(),
		hours = Math.floor(time / (60 * 60)),
		minutes = Math.floor((time % (60 * 60)) / 60),
		seconds = Math.floor(time % 60);
const moment = require("moment-timezone");
var juswa = moment.tz("Asia/Dhaka").format("『D/MM/YYYY』 【hh:mm:ss】");
  
var callback = () => api.sendMessage({body:`
--------------------------------------------
🧋𝐁𝐎𝐓  𝐈𝐧𝐟𝐨𝐫𝐦𝐚𝐭𝐢𝐨𝐧🥥


•┄┅═════❁🌺❁═════┅┄•

 𝐁𝐨𝐭 𝐍𝐚𝐦𝐞 : 🧋𝙄𝙯𝙪 𝙆𝙖𝙤𝙧𝙞 🎐

𝐏𝐑𝐄𝐅𝐈𝐗    :   𓊈 , 𓊉

𝐁𝐨𝐭 𝐀𝐝𝐦𝐢𝐧 : 🧃𝘼𝙭𝙤𝙣𝙞𝙨𝙩 𝙔𝙏 🎐

𝐁𝐨𝐭 𝐎𝐰𝐧𝐞𝐫 : 🍹𝘾𝙪𝙧𝙨𝙚𝙙 𝙓𝙞𝙤🎐

•┄┅═════❁🌺❁═════┅┄•







•┄┅═══🥭通訊媒介🥭═══┅┄• 

🧋❶ 𝐅𝐚𝐜𝐞𝐛𝐨𝐨𝐤 𝐈𝐝 : https://www.facebook.com/classic.ranking.37

🥥② 𝐅𝐚𝐜𝐞𝐛𝐨𝐨𝐤 𝐈𝐝: https://www.facebook.com/profile.php?id=100056347098480

🧃❶ 𝙈𝙚𝙨𝙨𝙚𝙣𝙜𝙚𝙧 𝙂𝙍𝙋 : https://m.me/j/AbZHdj67j0Zx_fLb/

🍹② 𝙈𝙚𝙨𝙨𝙚𝙣𝙜𝙚𝙧 𝙂𝙍𝙋 :
https://m.me/j/Aba9mzBNTXzVgg21/

🫒𝐘𝐨𝐮𝐓𝐮𝐛𝐞 𝐋𝐢𝐧𝐤 : https://youtube.com/@axonistyt4515?si=iOg4em0tBt-AbJqV




•┄┅═════❁🌺❁═════┅┄•\n🌺✨𝐎𝐭𝐡𝐞𝐫𝐬 𝐈𝐧𝐟𝐨𝐫𝐦𝐚𝐭𝐢𝐨𝐧✨🌺\n •┄┅═════❁🌺❁═════┅┄•

TYPE /admin 🥥


🧋𝘽𝙤𝙩 𝙉𝙖𝙢𝙚 : 𝙄𝙯𝙪 𝙆𝙖𝙤𝙧𝙞 🎐
🧃𝘽𝙤𝙩 𝘼𝙙𝙢𝙞𝙣 : 𝘾𝙪𝙧𝙨𝙚𝙙 𝙓𝙞𝙤 👑
𝘽𝙤𝙩 𝙊𝙬𝙣𝙚𝙧 : 𝘾𝙪𝙧𝙨𝙚𝙙 𝙓𝙞𝙤 & 𝘼𝙭𝙤𝙣𝙞𝙨𝙩 𝙔𝙏

🎐西奧的個人訊息🎐

𝘾𝙪𝙧𝙨𝙚𝙙 𝙓𝙞𝙤 𝙋𝙚𝙧𝙨𝙤𝙣𝙖𝙡 𝙄𝙣𝙛𝙤𝙧𝙢𝙖𝙩𝙞𝙤𝙣
•┄┅═════❁  🍒  ❁═════┅┄•

𝙉𝙖𝙢𝙚           𝙓𝙞𝙤 𝙒𝙖𝙣𝙜🍉
𝙉𝙞𝙘𝙠𝙣𝙖𝙢𝙚      𝙇𝙪 𝙭𝙞𝙤🥭
𝐀𝐠𝐞                 𝟐𝟏🎐
𝐆𝐞𝐧𝐝𝐞𝐫           𝐌𝐚𝐥𝐞 ♂️
𝐑𝐞𝐥𝐢𝐠𝐢𝐨𝐧          𝐈𝐬𝐥𝐚𝐦 🧃
𝐄𝐝𝐮𝐜𝐚𝐭𝐢𝐨𝐧       𝐃𝐞𝐠𝐫𝐞𝐞 🥥

𝐀𝐝𝐝𝐫𝐞𝐬𝐬        𝐂𝐡𝐢𝐧𝐚𒆜𝙎𝙃𝘼𝙉𝙂𝙃𝘼𝙄🌾
𝐍𝐚𝐭𝐢𝐨𝐧𝐚𝐥𝐢𝐭𝐲    𝐂𝐡𝐢𝐧𝐞𝐬𝐞🍇
𝐑𝐞𝐥𝐚𝐭𝐢𝐨𝐧𝐬𝐡𝐢𝐩   𝐒𝐢𝐧𝐠𝐥𝐞🌶️
𝐇𝐨𝐛𝐛𝐲              𝐆𝐚𝐫𝐝𝐞𝐧𝐢𝐧𝐠🌿



                  ▌│█║▌║▌║█║│
                    𝙲𝚞𝚛𝚜𝚎𝚍 𝚇𝚒𝚘
                  𝟏𝟎𝟎𝟎𝟒𝟓𝟔𝟗𝟓𝟑𝟔𝟑𝟖𝟎𝟎




`,attachment: fs.createReadStream(__dirname + "/cache/1.png")}, event.threadID, () => 
    fs.unlinkSync(__dirname + "/cache/1.png"));  
      return request(encodeURI(`https://cdn.fbsbx.com/v/t59.2708-21/411618281_737489451591731_6258807383906226824_n.gif?_nc_cat=105&ccb=1-7&_nc_sid=cf94fc&_nc_ohc=vpau4_zZiXcQ7kNvgH_hE27&_nc_ht=cdn.fbsbx.com&oh=03_Q7cD1QE4WIs5nALr_Y96PyodMXLeDIHv5xV6SF_dK635vnXYIQ&oe=66C3C501`)).pipe(
fs.createWriteStream(__dirname+'/cache/1.png')).on('close',() => callback());
   };
