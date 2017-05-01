var http = require('http');

var processUniqueUuid = 'xxx'.replace(/[xy]/g, function(c) {
	var r = Math.random()*16|0, v = c == 'x' ? r : (r&0x3|0x8);
	return v.toString(16);
});

http.createServer(function (req, res) {
	res.writeHead(200, {'Content-Type': 'text/html'});
	var body = `
		<html>
		<head>
		<title>Sample NodeJS Webapp</title>
		<link rel="stylesheet" href="https://unpkg.com/purecss@0.6.2/build/pure-min.css" integrity="sha384-UQiGfs9ICog+LwheBSRCt1o5cbyKIHbwjWscjemyBMT9YCUMZffs6UqUTd0hObXD" crossorigin="anonymous">
		<style>
			header {
				background-color: skyblue;
				color: rgb(0, 0, 0);
			}

			header h1 {
				font-size: 200%;
				font-weight: 200;
			}

			h4 {
				font-size: 120%;
				font-weight: 200;
			}
		</style>
		</head>
		<body>
		<header>
			<h1>Node Web Sample</h1>
		</header>
		<h4>Served From host</h4>
		<p>
			${processUniqueUuid}
		</p>

		<h4>Headers</h4>
		<p>
			<ul>
				${listOfHeaders(req.headers)}
			</ul>
		</p>
		</body>
		</html>`;
	res.end(body);
}).listen(80);

function listOfHeaders(headers) {
	let html = "";
	for (var i in headers) {
		html += (`<li><strong>${i}</strong> ${headers[i]}</li>\n`);
	}
	return html;
}

console.log('Server running at localhost:80/');
