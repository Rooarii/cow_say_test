const info = {
    name:'Rooarii MANUEL',
    campus:'Wild Code chool - Toulouse'
}

const cowsay = require("cowsay");
const myInfos = () => {
    console.log(cowsay.say({
        text : `Hi my name is ${info.name}, I'm studying web developmentat ${info.campus}`,
        e : "oO",
        T : "U "
    }));
    console.log();
};


module.exports = myInfos;