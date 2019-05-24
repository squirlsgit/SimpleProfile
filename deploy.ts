import { spawn } from 'child_process';
import { testdeploy } from './testdeploy';
declare var process;
const now = new Date();

let branch = process.argv0 || 'master';
//if (process.argv[2]) {
//  branch = process.argv[2];
//}
console.log("Using Branch", branch);
const child = spawn(`
  npm run-script build &&
  git add . &&
  git commit -am "Updating code at ${now.toUTCString()} and publishing" &&
  git push heroku ${branch}
`);

child.stdout.setEncoding('utf8');
let log = 0;

child.stdout.on('data', (data) => {
  log++;
  console.log(`${log}:`, data);
});

child.stderr.on('error', (err) => {
  console.error(`${log}`, err);
  child.kill();
});

child.on('close', (closing) => {
  console.log(`Child process exited with code ${closing}`);
  testdeploy();
});
