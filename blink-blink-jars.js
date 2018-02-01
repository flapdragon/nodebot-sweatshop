const five = require('johnny-five')
const board = new five.Board()

board.on('ready', function() {
  const led13 = new five.Led(13)
  led13.blink(1000)
})
