const fs           = require('fs')

const directories  = {
    prefs  : "./preferences/",
    themes : "./themes/",
    icons  : "./icons/",
    fonts  : "./fonts/"
};

const prefsFile    = "prefs.json";

const defalutPrefs = {

}

function getDir(dir) {
    if (!fs.existsSync(dir)){
        fs.mkdirSync(dir)
    }
    return dir
}

function readFile(filePath, defaultContents = ""){
    let openFile = fs.openSync(filePath, 'a'),
        fileContents;

    fileContents = fs.readFileSync(filePath)

    console.log(fileContents);

}

readFile("./preferences/prefs.json", true, defalutPrefs);

exports.setPrefs = function(options){

}

exports.prefs = function(){

}
