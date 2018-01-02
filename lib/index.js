
// 只是做一个记录

import os from 'os'

// CPU 的字节序
console.log('endianness : ' + os.endianness());

// 操作系统名
console.log('type : ' + os.type());

// 操作系统名
console.log('platform : ' + os.platform());

// 系统内存总量
console.log('total memory : ' + os.totalmem() + " bytes.");

// 操作系统空闲内存量
console.log('free memory : ' + os.freemem() + " bytes.");

//操作时间
console.log('time :' + os.uptime());

//操作电脑信息
console.log('cpus :' + os.cpus());
