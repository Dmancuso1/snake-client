const { connect } = require('./client');
console.log('Connecting ...');
connect();



const handleUserInput = (key) => {
  if (key === '\u0003') { // key is the CB func. that waits for the condition.
    process.exit();
  }// \u0003 maps to ctrl+c input
}

/**
 * Setup User Interface 
 * Specifically, so that we can handle user input via stdin
 */

const setupInput = function() {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();

  
  stdin.on('data', (key) => {
    handleUserInput(key) 
  });
  

  return stdin;
};



setupInput()