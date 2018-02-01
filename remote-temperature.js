const five = require('johnny-five')
const dnode = require('dnode')
const board = new five.Board()

board.on('ready', () => {
  const thermometer = new five.Thermometer({
    controller: 'TMP36',
    pin: 'A0'
  })

  let temperature = null

  thermometer.on('data', (temp) => {
    temperature = temp.celsius
  })

  const server = dnode({
    getTemperature: (cb) => {
      cb(temperature)
    }
  })
  server.listen(1337)
})
