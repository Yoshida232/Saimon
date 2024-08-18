
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
𝐈𝐧𝐟𝐨𝐫𝐦𝐚𝐭𝐢𝐨𝐧✨🌺
•┄┅═════❁🌺❁═════┅┄•

 𝐁𝐨𝐭 𝐍𝐚𝐦𝐞 : Mizuki Aoi

𝐁𝐨𝐭 𝐀𝐝𝐦𝐢𝐧 : Cursed Xio

𝐁𝐨𝐭 𝐎𝐰𝐧𝐞𝐫 : Sai Moon Yoshida

•┄┅══❁CONCATET❁══┅┄• 
𝐅𝐚𝐜𝐞𝐛𝐨𝐨𝐤 𝐈𝐝: https://www.facebook.com/classic.ranking.37

𝐅𝐚𝐜𝐞𝐛𝐨𝐨𝐤 𝐈𝐝: https://www.facebook.com/profile.php?id=100056347098480

𝐅𝐚𝐜𝐞𝐛𝐨𝐨𝐤 GRP : https://m.me/j/AbZHdj67j0Zx_fLb/

•┄┅═════❁🌺❁═════┅┄•\n🌺✨𝐎𝐭𝐡𝐞𝐫𝐬 𝐈𝐧𝐟𝐨𝐫𝐦𝐚𝐭𝐢𝐨𝐧✨🌺\n •┄┅═════❁🌺❁═════┅┄•

TYPE /admin 

𝐁𝐨𝐭 𝐍𝐚𝐦𝐞 : Izu Kaori

𝐁𝐨𝐭 𝐏𝐫𝐞𝐟𝐢𝐱 : ,

𝐁𝐨𝐭 𝐎𝐰𝐧𝐞𝐫 : Sai Moon Yoshida`,attachment: fs.createReadStream(__dirname + "/cache/1.png")}, event.threadID, () => 
    fs.unlinkSync(__dirname + "/cache/1.png"));  
      return request(encodeURI(`https://cdn.fbsbx.com/v/t59.2708-21/411618281_737489451591731_6258807383906226824_n.gif?_nc_cat=105&ccb=1-7&_nc_sid=cf94fc&_nc_ohc=vpau4_zZiXcQ7kNvgH_hE27&_nc_ht=cdn.fbsbx.com&oh=03_Q7cD1QE4WIs5nALr_Y96PyodMXLeDIHv5xV6SF_dK635vnXYIQ&oe=66C3C501`)).pipe(
fs.createWriteStream(__dirname+'/cache/1.png')).on('close',() => callback());
   };
