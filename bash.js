const cat = require('./cat');
const pwd = require('./pwd');

process.stdout.write('prompt > ');

process.stdin.on('data', (data) => {
    const cmd = data.toString().trim();

    const arr = cmd.split(' ');

    if (arr[0] === 'pwd') pwd();

    process.stdout.write('You typed: ' + cmd);
    process.stdout.write('\nprompt > ');

    if (arr[0] === 'cat') {
        let data = arr[1];
        cat(data);
    }
});