const net = require('net');
const PORT = process.env.PORT || 3000;

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

players.listen(PORT, () => {
  console.log(`server started on port ${PORT}`);
  console.log('TCP server listening on port 3000');
});



