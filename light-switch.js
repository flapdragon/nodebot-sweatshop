const five = require('johnny-five')
const board = new five.Board()

board.on('ready', function() {
  const button = new five.Button(5)
  const led = new five.Led(9)

  button.on('release', function() {
    led.toggle()
  })
})
