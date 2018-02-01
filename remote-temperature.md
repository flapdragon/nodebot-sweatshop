# NodeBot Workshop

## Remote Temperature (Exercise 8 of 9)

 Temperature near you as a service.

 Use dnode to create an rpc server that allows anyone to query the last
 known temperature of a TMP36 temperature sensor.

  » Attach temperature sensor to A0
  » Install dnode npm install dnode
  » Setup your dnode server to listen on port 1337
  » Your rpc endpoint should expose a function called getTemperature
  » getTemperature should callback with the temperature in celsius

## Circuit diagram

     +5  o-----.
               |
               |
              __
             |   \
     A0  o---|    ) TMP36
             |__ /
               |
               |
    GND  o-----'

## Components

  » TMP36 - (http://node-ardx.org/electronics-primer#tempsensor)

  > Produces a variable resistance dependent on the ambient temperature.

## Hints

  » Remember, you're always working with voltages on pins
  » The value from a sensor is a representation of the voltage on that pin
  » You'll need to convert that value into a useful temperature reading...
  » To create an enpoint, pass dnode an object with your endpoint as a
    method
  » Your endpoint should take a callback and pass the value to it

## Docs

  » (https://github.com/rwaldron/johnny-five/blob/master/docs/temperature-t
    mp36.md)
  » dnode - (https://github.com/substack/dnode)

─────────────────────────────────────────────────────────────────────────────

  » To print these instructions again, run: nodebot-workshop print
  » To execute your program in a test environment, run: nodebot-workshop
    run program.js
  » To verify your program, run: nodebot-workshop verify program.js
  » For help run: nodebot-workshop help      
