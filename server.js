var http = require("http");
var fs = require("fs");

http.createServer(function (request, response) {
    response.writeHead(200, {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': 'http://localhost:4200'
    });


    var data = JSON.parse(fs.readFileSync('city.list.json'));
    var reqCity = request.url.substr(1);

    var result = data.filter(function(city){
        return city.name.toLowerCase().includes(reqCity.toLowerCase());
    });

    response.write(JSON.stringify(result));

    response.end();
}).listen(3000);

// Console will print the message
console.log('Server running at http://127.0.0.1:3000/');
