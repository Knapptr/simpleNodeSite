const http = require('http');
const fs = require('fs');
const url = require('url')

http.createServer((req, res) => {
    let address = url.parse(req.url, true)
    let fileName = "." + address.path + ".html";
    if (address.path === "/") { fileName = "./index.html" }
    console.log(fileName);
    fs.readFile(fileName, (err, data) => {
        if (err) {

            fs.readFile("./404.html", (err, data) => {
                if (err) { console.log("ERROR RETRIEVING 404: " + err) }
                console.log("err: " + err);
                console.log("data: " + data)
                res.write(data);
                return res.end();
           })

        } else {
            res.writeHead(200, { "Content-Type": "text/html" });
            res.write(data);
            return res.end();
        }
    });
}).listen(8080)
