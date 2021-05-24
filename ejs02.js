var ejs = require("ejs");
var fs = require("fs");
var http = require("http");


http.createServer(function (req, res) {
    fs.readFile("ejs02.ejs", "utf-8", function (err, data) {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        var title = "hello world";
        var userInfo = {
            name: "devil13th",
            age: 5,
            school: "THD",
            message: "<div style='border:1px solid red;'>i'm message</div>"
        };
        var html = ejs.render(data, { title: title, userInfo: userInfo });
        res.end(html);
    })

}).listen(3000);
console.log("server running ...");


console.log("finish");