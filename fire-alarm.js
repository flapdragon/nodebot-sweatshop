const five = require('johnny-five')
const board = new five.Board()

board.on('ready', () => {
  const thermometer = new five.Thermometer({
    controller: 'TMP36',
    pin: 'A0'
  })
  const piezo = new five.Piezo(9)
  const led = new five.Led(13)
  const button = new five.Button(5)

  let isFireOn = false
  let sirenInterval = null

  // Sound the alarm
  function soundAlaram () {
    led.strobe(1000)
    piezo.tone(five.Piezo.Notes.c4, 750)
    sirenInterval = setInterval(function () {
      piezo.tone(five.Piezo.Notes.c4, 750)
    }, 1000)
  }

  // Silence the alarm
  function silenceAlarm () {
    led.stop().off()
    clearInterval(sirenInterval)
    piezo.noTone()
  }

  thermometer.on('change', (temp) => {
    if (temp.celsius > 50) {
      // if fire is still on do nothing
      if (isFireOn) return
      // fire on = true, sound alarm
      isFireOn = true
      soundAlaram()
    }
    else {
      // fire on = false, silence alarm
      isFireOn = false
      silenceAlarm()
    }
  })

  button.on('press', function() {
    // silence alarm
    silenceAlarm()
  })
})
