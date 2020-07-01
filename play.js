const net = require('net');

/*
Establishes connection with the game server
*/
const connect = function() {
  const conn = net.createConnection({
    host: 'localhost',
    port: 50541
  });
  // interpret incomming data as text.
  conn.setEncoding('utf8');

  // sends message back to the server.
  conn.on('data', () => {
  console.log('you ded cuz you idled');
  });

  return conn;

}

console.log('connecting...');
connect();