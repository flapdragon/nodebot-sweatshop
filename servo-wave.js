const five = require('johnny-five')
const board = new five.Board()

board.on('ready', function() {
  const servo09 = new five.Servo(9)
  servo09.sweep()
  this.wait(3000, function() {
    servo09.stop()
    servo09.center()
  });
})
