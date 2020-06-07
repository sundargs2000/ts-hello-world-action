const core = require('@actions/core');
const exec = require('@actions/exec');
async;
function run() {
    try {
        let out1 = await exec.exec('sudo apt install nodejs');
        let out = await exec.exec('npm install');
        console.log(out);
        const nameToGreet = core.getInput('name');
        console.log(`Hello ${nameToGreet}!`);
        let op = `Result = ${nameToGreet}-success`;
        core.setOutput('status', String(op));
    }
    catch (error) {
        core.setFailed(error.message);
    }
    run().catch(core.setFailed);
}
