const core = require('@actions/core');
const os = require('os'); 

try {
    console.log(os.type()); 
    const nameToGreet = core.getInput('name');
    console.log(`Hello ${nameToGreet}!`);
    let op = `Result = ${nameToGreet}-success`;
    core.setOutput('status', String(op));
}
catch (error) {
    core.setFailed(error.message);
}
