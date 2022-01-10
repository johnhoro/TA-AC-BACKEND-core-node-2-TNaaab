let relativePath = `./index.html`;
let absolutePath = __dirname;
let path = require(`path`);

let indexPath = path.join(__dirname, relativePath);
console.log(indexPath);
console.log(absolutePath + `/index.html`);
