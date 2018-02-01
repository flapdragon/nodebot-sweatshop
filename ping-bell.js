const five = require('johnny-five')
const board = new five.Board()
const dgram = require('dgram')

board.on('ready', function() {
  const piezo = new five.Piezo(8)
  const server = dgram.createSocket('udp4')

  board.repl.inject({
    piezo: piezo
  })

  server.on('message', (msg, rinfo) => {
    piezo.tone(five.Piezo.Notes.c4, 1000)
  })

  server.bind(1337)
})
