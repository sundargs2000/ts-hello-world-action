const core = require('@actions/core');

try {
    exec.exec('ls');
    const nameToGreet = core.getInput('name');
    console.log(`Hello ${nameToGreet}!`);
    let op = `Result = ${nameToGreet}-success`;
    core.setOutput('status', String(op));
}
catch (error) {
    core.setFailed(error.message);
}
