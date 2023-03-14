const net = require('net');

const players = net.createServer((socket) => {
  console.log(`Client connected: ${socket.remoteAddress}:${socket.remotePort}`);

  socket.on('data', (data) => {
 console.log(`Received message from client: ${data}`);
   socket.write(data + '\n');

  });

  socket.on('close', () => {
    console.log('Client disconnected');
  });
});

players.listen(3000, () => {
  console.log('TCP server listening on port 3000');
});



