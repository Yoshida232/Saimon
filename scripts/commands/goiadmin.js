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
      var msg = ["🧋Don't Mention My Husband Cursed Xio 💕 🎐Cause he's busy with me!💌 ", "- 🧋Don't Mention My Husband Cursed Xio 💕 🎐Cause he's busy with me!💌", ""," 🧋Don't Mention My Husband Cursed Xio 💕 🎐Cause he's busy with me!💌","🧋Don't Mention My Husband Cursed Xio 💕 🎐Cause he's busy with me!💌","🧋Don't Mention My Husband Cursed Xio 💕 🎐Cause he's busy with me!💌","🧋Don't Mention My Husband Cursed Xio 💕 🎐Cause he's busy with me!💌","🧋Don't Mention My Husband Cursed Xio 💕 🎐Cause he's busy with me!💌","🧋Don't Mention My Husband Cursed Xio 💕 🎐Cause he's busy with me!💌","🧋Don't Mention My Husband Cursed Xio 💕 🎐Cause he's busy with me!💌","🧋Don't Mention My Husband Cursed Xio 💕 🎐Cause he's busy with me!💌"];
      return api.sendMessage({body: msg[Math.floor(Math.random()*msg.length)]}, event.threadID, event.messageID);
    }
    }}
};
module.exports.run = async function({}) {
}
