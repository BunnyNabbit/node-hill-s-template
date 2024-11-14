const nh = require('node-hill-s')

const { Brick } = nh

function hook(Game) {
	Game.on("initialSpawn", async (player) => {
		player.message("Hello world!")
	})
}

module.exports = hook