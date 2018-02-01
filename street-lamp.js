const five = require('johnny-five')
const board = new five.Board()

board.on('ready', function() {
  const photoresistor = new five.Sensor({
    pin: 'A0',
    freq: 250
  })

  board.repl.inject({
    pot: photoresistor
  })

  const led = new five.Led(9)

  photoresistor.on('data', function() {
    if (this.value > 600) {
      led.on()
    }
    else {
      led.off()
    }
  })
})
