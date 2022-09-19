const os = require('os');

// Info about current user
const user =os.userInfo();
console.log(user);

// Method returns the system uptime in seconds
console.log(`the system uptime is ${os.uptime()}`);


const currentOS = {
  name:os.type(),
  release:os.release(),
  totelMem:os.totalmem(),
  freeMem:os.freemem()
}
console.log(currentOS);