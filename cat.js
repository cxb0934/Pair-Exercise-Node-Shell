const fs = require('fs');

module.exports = (data) => {
    const str = fs.readFile(data);
    process.stdout.write(str);
}