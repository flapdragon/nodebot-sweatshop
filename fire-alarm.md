# NodeBot Workshop

## Fire Alarm (Exercise 9 of 9)

 Build a "fire alarm" that sounds when the air temperature is more than
 50°C.

  » Attach a temperature sensor TMP36 to A0
  » Attach a piezo to pin 9
  » Attach an LED to pin 13
  » Attach a button to pin 5
  » When the temperature sensor detects a temperature above 50°C the piezo
    should sound and the LED should flash on and off continuously
  » If the temperature drops below 50°C the piezo and LED should switch off
  » If the button is pressed the piezo and LED should turn off and should
    not turn on again unless the temperature drops below 50°C

## Circuit diagram

                      330        LED
    Pin 13  o--------/\/\/-------->|---------
                                            |
    Pin 5   o----------------------         |
                                  |         |
                           10k    |         |
       +5   o----.--------/\/\/---.         |
                 |                |         |
                 |                |         |
                 |             .--|--|--.   |
                 |             | |  |   |   |
                 |   Button  --+-|  |   |   |
                 |             | |  |   |   |
                 |             '--|--|--'   |
                 |                |         |
                 |                ----------.---o  GND
                 __                         |
                |   \                       |
        A0  o---|    ) TMP36                |
                |__ /                       |
                 |                          |
                 ---------------------------.
                                            |
                         Piezo              |
                           _                |
                         || ||              |
     Pin 9   o-----------|| ||---------------
                         ||_||

## Docs

  » LED - (https://github.com/rwaldron/johnny-five/wiki/Led)
  » Piezo -
    (https://github.com/rwaldron/johnny-five/blob/master/docs/piezo.md)
  » TMP36 -
    (https://github.com/rwaldron/johnny-five/blob/master/docs/temperature-t
    mp36.md)
  » Button - (https://github.com/rwaldron/johnny-five/wiki/Button#usage)

─────────────────────────────────────────────────────────────────────────────

  » To print these instructions again, run: nodebot-workshop print
  » To execute your program in a test environment, run: nodebot-workshop
    run program.js
  » To verify your program, run: nodebot-workshop verify program.js
  » For help run: nodebot-workshop help  
