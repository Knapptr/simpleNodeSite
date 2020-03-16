const app = require('express')();

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html')
})
app.get('/about', (req, res) => {
    res.sendFile(__dirname + '/about.html')
})
app.get('contact-me', (req, res) => {
    res.sendFile(__dirname+'/contact-me.html')
})
app.use(function (req, res, next) {
    res.status(404).sendFile(__dirname +'/404.html')
  })

app.listen(3000, () => {
    console.log("listening on 3000!")
})
// http.createServer((req, res) => {
//     let address = url.parse(req.url, true)
//     let fileName = "." + address.path + ".html";
//     if (address.path === "/") { fileName = "./index.html" }
//     console.log(fileName);
//     fs.readFile(fileName, (err, data) => {
//         if (err) {

//             fs.readFile("./404.html", (err, data) => {
//                 if (err) { console.log("ERROR RETRIEVING 404: " + err) }
//                 console.log("err: " + err);
//                 console.log("data: " + data)
//                 res.write(data);
//                 return res.end();
//            })

//         } else {
//             res.writeHead(200, { "Content-Type": "text/html" });
//             res.write(data);
//             return res.end();
//         }
//     });
// }).listen(8080)
