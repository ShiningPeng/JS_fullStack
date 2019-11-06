const { fork } = require('child_process');
const net = require('net');
const socketServer = net.createServer();

const cpus = require('os').cpus();

// console.log('length', cpus.length);

for (let i = 0; i < cpus.length; i++) {
  createWork();
}
socketServer.listen(3333, () => {
  console.log('server is runing at 3333');
})
function createWork() {
  const work = fork('./work.js');
  work.on('message', function (msg) {
    const { act } = msg;
    if (act === 'dead') {
      createWork();
    }
  })
  work.send('server', socketServer);
  console.log('work process created');
}

// 3605373657--zxc78989
// 3293729516--zxc78989
