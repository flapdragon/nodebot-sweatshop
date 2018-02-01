const five = require('johnny-five')
const dgram = require('dgram')
const board = new five.Board()

board.on('ready', () => {
  const piezo = new five.Piezo(8)
  const server = dgram.createSocket('udp4')

  server.on('message', (msg) => {
    piezo.play({
      song: [
        ["C4", 1 / 4],
        ["D4", 1 / 4],
        ["F4", 1 / 4],
        ["D4", 1 / 4],
        ["A4", 1 / 4],
        [null, 1 / 4],
        ["A4", 1],
        ["G4", 1],
        [null, 1 / 2],
        ["C4", 1 / 4],
        ["D4", 1 / 4],
        ["F4", 1 / 4],
        ["D4", 1 / 4],
        ["G4", 1 / 4],
        [null, 1 / 4],
        ["G4", 1],
        ["F4", 1],
        [null, 1 / 2]
      ],
      tempo: 100
    })
  })

  server.bind(1337)
})
