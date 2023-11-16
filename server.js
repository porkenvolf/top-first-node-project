const http = require("http");
const fs = require("fs");

const port = 3000;
const hostname = "localhost";

const server = http.createServer((req, res) => {
    let path = __dirname;
    switch (req.url) {
        case "/":
            res.writeHead(200, { "Content-Type": "text/html" });
            path += "/index.html";
            break;
        case "/about":
            res.writeHead(200, { "Content-Type": "text/html" });
            path += "/about.html";
            break;
        case "/contact":
            res.writeHead(200, { "Content-Type": "text/html" });
            path += "/contact.html";
            break;
        default:
            res.writeHead(404, { "Content-Type": "text/html" });
            path += "/404.html";
            break;
    }

    console.log(path);
    fs.readFile(path, (err, data) => {
        if (err) {
            res.writeHead(500, { "Content-Type": "text/html" });
            res.end("server error");
        } else {
            res.end(data);
        }
    });
});
server.listen(port, hostname, () => {});
