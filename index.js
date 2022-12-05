const info = require("./information.js")
let cowsay = require("cowsay");

console.log(cowsay.say({
    text :`I'm ${info.campus.myName} "from Lyon" ${info.campus.college}` ,
    e : "oO",
    T : "U ",
}));



