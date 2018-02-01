const five = require('johnny-five')
const board = new five.Board()

board.on('ready', () => {
  const potentiometer = new five.Sensor({
    pin: 'A2',
    freq: 250
  })
  const servo = new five.Servo(9)

  potentiometer.on('change', (value) => {
    const position = five.Fn.map(value,
      0, 1023,
      0, 179
    )

    servo.to(position)
  })
})
