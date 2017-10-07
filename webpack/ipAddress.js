const os = require('os');

let ipAddress = '',
    networkInterfaces = os.networkInterfaces();
for (let i in networkInterfaces) {
  networkInterfaces[i].forEach(int => {
    if (int.family === 'IPv4' && int.address.indexOf('127.0') !== 0) {
      ipAddress = int.address;
    }
  });
}

module.exports = ipAddress;