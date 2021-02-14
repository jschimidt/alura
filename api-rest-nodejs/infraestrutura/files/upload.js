const fs = require('fs')
const path = require('path')

module.exports = (sourcePath,fileName,callback) => {
    const validType = ['.jpg','.png','.jpeg'].includes(path.extname(sourcePath))
    
    if (validType) {
        const targetPath = `./assets/image/${fileName}`
        fs.createReadStream(sourcePath)
            .pipe(fs.createWriteStream(targetPath))
            .on('finish', callback(false,targetPath))
    } else {
        callback('Tipo é inválido!')
    }
}