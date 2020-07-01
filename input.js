
const handleUserInput = (key) => {
  if (key === '\u0003') { // key is the CB func. that waits for the condition.
    process.exit();
  }// \u0003 maps to ctrl+c input

  if (key === '\x77') { // 'w'
    console.log("up");
  }
  if (key === '\x61') { // 'a'
    console.log("left");
  }
  if (key === '\x73') { // 's'
  console.log("down");
  }
  if (key === '\x64') { // 'd'
  console.log("right");
  }


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


const setupInputObj = {
  setupInput,
}
module.exports = setupInputObj;



