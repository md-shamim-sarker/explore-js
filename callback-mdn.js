function greeting(name) {
    console.log('Hello ' + name);
}

function processUserInput(callback) {
    var name = 'Shamim Sarker';
    callback(name);
}

processUserInput(greeting);