
const  cp  = require('child_process');
//import { testdeploy } from './testdeploy';


let environment = process.argv0 || 'development';

console.log( "Using Environment", environment );
const child = cp.spawn(`
  npm run-script build &&
  npm run-script start
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
  //testdeploy();
});
