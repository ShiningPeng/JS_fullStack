const forkComputer = () => {
  let sum = 0;
    for (let i = 0; i < 1000000; i++) {
      sum += i;
    }
    return sum;
}
// process是node中的一个全局变量
process.on('message', (msg) => {
  console.log(msg);
  const sum = forkComputer();
  process.send(sum);
})