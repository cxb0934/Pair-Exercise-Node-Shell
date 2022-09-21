const cat = require('./cat');
const pwd = require('./pwd');
const curl = require('./curl');

process.stdout.write('prompt > ');

process.stdin.on('data', (data) => {
    const cmd = data.toString().trim();

    const arr = cmd.split(' ');

    if (arr[0] === 'pwd') pwd();
    if (arr[0] === 'cat') {
        let data = arr[1];
        cat(data);
    }
    if (arr[0] === 'curl') {
        let data = arr[1];
        curl(data);
    }

    process.stdout.write('You typed: ' + cmd);
    process.stdout.write('\nprompt > ');   
});

const done = (output) =>{
    process.stdout.write(output);
}