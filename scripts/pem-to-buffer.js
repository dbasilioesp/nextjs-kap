const fs = require('fs');

const privateKey = fs.readFileSync('./private-key.pem', 'utf8')

const buff = Buffer.from(privateKey).toString('base64');

console.log(buff);