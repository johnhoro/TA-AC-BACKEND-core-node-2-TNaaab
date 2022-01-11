let http = require(`http`);
let fs = require(`fs`);

let url = require(`url`);
let server = http.createServer(handleRequest);

function handleRequest(req, res) {
  if (req.method === `GET` && req.url === `/`) {
    res.setHeader(`Content-Type`, `text/html`);
    fs.createReadStream(`./readme.txt`).pipe(res);
  }
}

server.listen(4040, () => {
  console.log(`server is loading on port 4040`);
});
