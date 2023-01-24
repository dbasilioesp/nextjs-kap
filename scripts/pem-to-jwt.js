const fs = require('fs');
const jwt = require('jsonwebtoken')

const now = Math.floor(Date.now() / 1000)
const tenMinutes = now + (10 * 60)
const clockDrift = now - 60

const privateKey = fs.readFileSync('./private-key.pem', 'utf8')

const payload = {
    // issued at time, 60 seconds in the past to allow for clock drift
    iat: clockDrift,
    exp: tenMinutes,
    iss: "282722"
  }

var token = jwt.sign(payload, privateKey, { algorithm: 'RS256' });

console.log(token)