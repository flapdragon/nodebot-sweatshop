# NodeBot Workshop

## Street Lamp (Exercise 5 of 9)

 Build a street lamp that turns on as it gets dark.

  » Use photoresistor and an LED
  » Connect the photoresistor to A0 and the LED to 9
  » Make the LED turn on when the photoresistor's value is greater than 600

## Circuit diagram

                PhotoR     10K
         +5 o---/\/\/--.--/\/\/--.--o GND
                       |         |
     Pin A0 o-----------         |  
                                 |
                330     LED      |
      Pin 9 o--/\/\/----->|-------

## Components

  » Photoresistor - (http://node-ardx.org/electronics-primer#photoresistor)

  > Produces a variable resistance dependant on the amount of incident light.

## Docs

  » Sensor - (https://github.com/rwaldron/johnny-five/wiki/Sensor)

## Hints

 johnny-five has a generic Sensor object for handling various analog
 inputs. It fires a data event with the current reading of the sensor. The
 sensor value is available to the callback as this.value

─────────────────────────────────────────────────────────────────────────────

  » To print these instructions again, run: nodebot-workshop print
  » To execute your program in a test environment, run: nodebot-workshop
    run program.js
  » To verify your program, run: nodebot-workshop verify program.js
  » For help run: nodebot-workshop help
