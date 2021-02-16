const fs = require('fs')
const path = require('path')

module.exports = (sourcePath,fileName,callback) => {

    return new Promise((resolve,reject) => {

        const validType = ['.jpg','.png','.jpeg'].includes(path.extname(sourcePath))
        
        if (validType) {

            if (fs.existsSync(sourcePath)) {
                const targetPath = `./assets/image/${fileName}${path.extname(sourcePath)}`
                fs.createReadStream(sourcePath)
                    .pipe(fs.createWriteStream(targetPath))
                    .on('finish', resolve(targetPath))
            } else {
                reject('Arquivo não encontrado!')
            }
        } else {
            reject('Tipo é inválido!')
        }
    })
}