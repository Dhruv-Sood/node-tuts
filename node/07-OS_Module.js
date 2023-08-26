const os = require("os")

// info about current user
const user = os.userInfo()
console.log(user);

console.log("\n\n");

// method to return system uptime in seconds
console.log(
    `System uptime is ${(os.uptime()/3600)/24} days`
)

console.log("\n\n");

const currentOS = os.type()
console.log(currentOS);
console.log("\n\n");
