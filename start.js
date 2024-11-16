const nh = require('node-hill-s')

let start
try {
	start = require("./start.json")
} catch (error) {
	console.warn("start.json not found. using example config")
	start = require("./startExample.json")
}

nh.startServer(start).then(Game => {
	require("./src/hello.js")(Game)
})