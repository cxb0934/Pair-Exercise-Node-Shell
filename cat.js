const fs = require('fs');

module.exports = (str) => {
    fs.readFile(str, (err, data) =>{
        if(err) throw err;
        // process.stdout.write(data);
        done(data);
    })
    
}