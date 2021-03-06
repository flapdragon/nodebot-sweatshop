# NodeBot Workshop  

## Spin Motor Spin (Exercise 3 of 9)  

 Attach a motor to pin 9 and start it spinning!  

  » Spin the motor at 200 mph                                                   
  » Use board.wait to stop the motor spinning after 2 seconds                   
  » Start it spinning again after another second                                
  » Ensure this loop repeats infinitely                                         

 Hint: You could use the motor start and stop events to stop/start the  
 motor.  

## Circuit diagram  

                         ----o  GND  
                         |  
                330    |>  
    Pin 9  o---/\/\/---|  Transistor  
                       |\  
                         |  
                         |  
                   ------.  
                   |     |  
                   |     _  
                   |    / \  
            Diode  v   ( o )  Motor  
                   -    \_/  
                   |     |  
                   |     |  
       +5  o-------.------  

## Components  

  » Motor - (http://node-ardx.org/electronics-primer#dcmotor)                   

  > Spins when a current is passed through it.  

## Docs  

  » Board - (https://github.com/rwaldron/johnny-five/wiki/Board#api)            
  » Motor - (https://github.com/rwaldron/johnny-five/wiki/Motor#api)            

─────────────────────────────────────────────────────────────────────────────  

  » To print these instructions again, run: nodebot-workshop print              
  » To execute your program in a test environment, run: nodebot-workshop                                                                            
    run program.js                                                              
  » To verify your program, run: nodebot-workshop verify program.js             
  » For help run: nodebot-workshop help    
