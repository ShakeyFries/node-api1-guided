const { Console } = require("console")
const fs = require("fs")

//list of all files in the `data` folder
for (const filename of fs.readdirSync("data")) {
    // get a file name without an extension first
    const baseFilename = filename.substr(0, filename.lastIndexOf("."))
    // rename the file a new extension
    fs.renameSync(`data/${filename}`, `data/${baseFilename}.txt`)
}
// Web server backend 1 purpose is to respond to incoming requests 