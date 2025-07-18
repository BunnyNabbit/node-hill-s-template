function IntFromInterval(min, max) {
	return Math.floor(Math.random() * (max - min + 1) + min)
}
function shuffleArray(array) {
	for (let i = array.length - 1; i > 0; i--) {
		const j = Math.floor(Math.random() * (i + 1))
		[array[i], array[j]] = [array[j], array[i]]
	}
}

function pickItemInArray(array) {
	return array[IntFromInterval(0, array.length - 1)]
}

module.exports = {
	random: {
		shuffleArray,
		IntFromInterval,
		pickItemInArray,
	},
}
