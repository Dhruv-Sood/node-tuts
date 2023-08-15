// const fs = require('fs')

// Sync

const {readFileSync , writeFileSync} = require('fs')

const first = readFileSync("./content/first.txt" , 'utf8')
const second = readFileSync("./content/second.txt", "utf8");

console.log('\n\n--------------------\n\n');
console.log(first);
console.log("\n\n--------------------\n\n");
console.log(second);
console.log("\n\n--------------------\n\n");


writeFileSync(
  "./content/result-sync.txt",
  `\n\nHere is the result ${
    "\n\n--------------------\n\n" +
    first +
    "\n\n--------------------\n\n" +
    second +
    "\n\n--------------------\n\n"
  }` , {flag:'a'}
);

// {flag:'a'} Appends