# NodeBot Workshop  

## Servo Wave (Exercise 2 of 9)  

 Make a servo wave at you for 3 seconds, stop, and return to center.  

  » Create a new Servo instance attached to pin 9                               
  » Use servo.sweep to rotate between 0˚ and 180˚                               
  » Use board.wait to schedule a 'reset' callback after 3 seconds               
  » The 'reset' callback should stop and center the servo                       
  » Check the docs to see how to bring it back into line                        

## Boilerplate  

      var five = require('johnny-five')  
      var board = new five.Board()  
      board.on('ready', function () {  

        // Your solution here!  

      })  

## Circuit diagram  

            Servo  
            .---.  
            | | |  
          -===+===-  
            | | |  
            |   |  
            '---'  
            | | |  
            | | |  
    GND  o--. | .--o  Pin 9  
              |  
     +5  o----.  

## Components  

  » Servo - (http://node-ardx.org/electronics-primer#servo)                     

  > Takes a timed pulse and converts it into an angular position of the output  
  > shaft.  

## Docs  

  » Servo - (https://github.com/rwaldron/johnny-five/wiki/Servo#api)            
  » Board - (https://github.com/rwaldron/johnny-five/wiki/Board#api)            

─────────────────────────────────────────────────────────────────────────────  

  » To print these instructions again, run: nodebot-workshop print              
  » To execute your program in a test environment, run: nodebot-workshop                                                                            
    run program.js                                                              
  » To verify your program, run: nodebot-workshop verify program.js             
  » For help run: nodebot-workshop help      
