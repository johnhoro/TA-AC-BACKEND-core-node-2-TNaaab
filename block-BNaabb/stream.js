let http = require(`http`);
let server = http.createServer(handleRequest);

function handleRequest(req, res) {
  var store = ``;
  req.on(`data`, (chunk) => {
    store = store + chunk;
  });
  req.on(`end`, () => {
    res.setHeader(`Content-Type`, `text/plain`);
    res.write(store);
    res.end();
    console.log(store);
  });
}

server.listen(3456, () => {
  console.log(`server is loading on port 3456`);
});
