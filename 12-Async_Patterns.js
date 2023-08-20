const {readFile , writeFile} = require('fs')

const util = require('util')

const readFIlePromise = util.promisify(readFile)
const writeFilePromise = util.promisify(writeFile)
// const getText = (path)=>{
//     return new Promise((resolve , reject)=>{
//         readFile(path, "utf8", (err, data) => {
//           if (err) {
//             reject(err)
//           } else {
//             resolve(data)
//           }
//         });
//     })
// }

// getText("./content/first.txt")
//     .then(result => console.log(result))
//     .catch(err => console.log(err))

const start = async()=>{
    try {
        const first = await readFIlePromise("./content/first.txt",'utf8');
        console.log(first);
        await writeFilePromise('./content/third.txt','Yo Yo Honey Singh')
    } catch (error) {
        console.log(error);
    }
}
start()