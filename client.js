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


  // EVENT HANDLERS!
  conn.on('connect', () => {
    console.log('Successfully connected to game server');

    // setInterval(() => {
    //   conn.write('Move: up')
    // }, 1000)
    
  });

  conn.on('connect', () => {
    conn.write('Name: DGM');
   
  });

  // sends message back to the server.
  conn.on('data', () => {
    console.log('you ded cuz you idled');
  });



  return conn;

};





// adding the 'connect' function to object.
const connectObj = {
  connect,
};

module.exports = connectObj;