# NodeBot Workshop

## Light Switch (Exercise 4 of 9)

 Write a program that acts like a light switch to turn an LED on and off.

  » Attach a button to pin 5 and an LED to pin 9
  » Use the Button class to detect press events and toggle your LED on/off

## Circuit diagram

                330      LED
    Pin 9  o---/\/\/------>|------
                                 |
    Pin 5  o------------         |
                       |         |
                10k    |         |
       +5  o---/\/\/---.         |
                       |         |
                       |         |
          .---------.  |         |
          |         |  |         |
         -+-_______-+--+         |
          |    |    |            |
         -+-___|___-+--+         |
          |    |    |  |         |
          '____|____'  |         |
               |       |         |
            Button     |         |
                       +---------+---o  GND

## Components

  » Button - (http://node-ardx.org/electronics-primer#pushbutton)

  > Completes a circuit when it is pressed.

## Docs

  » Button - (https://github.com/rwaldron/johnny-five/wiki/Button#usage)
  » LED - (https://github.com/rwaldron/johnny-five/wiki/Led#api)

─────────────────────────────────────────────────────────────────────────────

  » To print these instructions again, run: nodebot-workshop print
  » To execute your program in a test environment, run: nodebot-workshop
    run program.js
  » To verify your program, run: nodebot-workshop verify program.js
  » For help run: nodebot-workshop help    
