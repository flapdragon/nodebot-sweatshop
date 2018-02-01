# NodeBot Workshop

## Ping Bell (Exercise 6 of 9)

 Create a UDP server that plays a sound when a message is received.

  » Attach a piezo to pin 8
  » Use the dgram node module to create a udp4 socket
  » Bind your server to port 1337 and listen for messages
  » When a message is received, have the piezo play a tune

## Circuit diagram

                Piezo
                  _
                || ||
     Pin 8  o---|| ||---o  GND
                ||_||

## Docs

  » (http://nodejs.org/api/dgram.html)
  » (https://github.com/rwaldron/johnny-five/blob/master/docs/piezo.md)

─────────────────────────────────────────────────────────────────────────────

  » To print these instructions again, run: nodebot-workshop print
  » To execute your program in a test environment, run: nodebot-workshop
    run program.js
  » To verify your program, run: nodebot-workshop verify program.js
  » For help run: nodebot-workshop help   
