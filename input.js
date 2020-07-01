
// stores the active TCP connection object;
let connection;


const handleUserInput = (key) => {
  if (key === '\u0003') { 
    process.exit();
  }// \u0003 maps to ctrl+c input

  if (key === '\x77') { // 'w'
  connection.write("Move: up");
  }
  if (key === '\x61') { // 'a'
  connection.write("Move: left");
  }
  if (key === '\x73') { // 's'
  connection.write("Move: down");
  }
  if (key === '\x64') { // 'd'
  connection.write("Move: right");
  }

  if (key === '\x7a') { // 'z'
  connection.write("Say: Ima get some lunch");
  }
  if (key === '\x78') { // 'x'
  connection.write("Say: howdy!");
  }


}

/**
 * Setup User Interface 
 * Specifically, so that we can handle user input via stdin
 */

const setupInput = function(conn) {
  connection = conn;
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



