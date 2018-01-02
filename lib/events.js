//监听处理事件

const EventEmitter  = require('events').EventEmitter;

const event = new EventEmitter();

event.on('someEvent', function(arg1, arg2) { 
    console.log('listener1', arg1, arg2); 
}); 
event.on('someEvent', function(arg1, arg2) { 
    console.log('listener2', arg1, arg2); 
}); 
event.emit('someEvent', 'arg1 参数', 'arg2 参数'); 

