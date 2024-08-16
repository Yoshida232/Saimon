module.exports.config = {
  name: "goiadmin",
    version: "1.0.0",
    permission: 0,
    credits: "Xio",
    description: "mention",
    prefix: true,
    category: "user",
    usages: "tag",
    cooldowns: 5,
};
module.exports.handleEvent = function({ api, event }) {
  if (event.senderID !== "100045695363800") {
    var aid = ["100045695363800"];
    for (const id of aid) {
    if ( Object.keys(event.mentions) == id) {
      var msg = ["Don't Mention My Master Cursed Xio 💌", "- Cause he's busy with me! ", "I Love Cursed Xio"," I Love Cursed Xio,Cursed Xio My Husband 💌","I Love Cursed Xio","I Love Cursed Xio","I Love Cursed Xio","I Love Cursed Xio","I Love Cursed Xio","I Love Cursed Xio","I Love Cursed Xio💌"];
      return api.sendMessage({body: msg[Math.floor(Math.random()*msg.length)]}, event.threadID, event.messageID);
    }
    }}
};
module.exports.run = async function({}) {
}
