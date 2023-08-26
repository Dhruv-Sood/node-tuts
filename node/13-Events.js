const EventEmitter = require('events')

const customEmitter = new EventEmitter()

customEmitter.on('response',(name,age)=>{
    console.log(`Data received:\n${name} is ${age} years old.`);
})

customEmitter.on("response", () => {
  console.log(`Aagya bhai data`);
});

customEmitter.emit('response','Dhruv','18')
