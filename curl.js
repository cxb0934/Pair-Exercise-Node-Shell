const request = require('request');

module.exports = (str) => {
    request(str, (err,response, data) =>{
        if (err) throw err;
        // process.stdout.write(data);
        done(data);
    })
}