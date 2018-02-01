# NodeBot Workshop  

## Robot Arm (Exercise 7 of 9)  

 Make a remote control robot arm  

 Use a rotary potentiometer (pot) to control the position of a servo.  

  » Attach a potentiometer to pin A2                                            
  » Attach a servo to pin 9                                                     
  » Have the servo rotate as the potentiometer is turned                        

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
             | | ------------------o  Pin 9  
             | |  
             | ----------------.---o  +5  
             |                 |  
             |  Potentiometer  |  
    GND  o---.------/\/\/------.  
                       ^  
                       |  
                       |  
     A2  o--------------  

## Components  

  » Potentiometer - (http://node-ardx.org/electronics-primer#pot)               

  > Produces a variable resistance dependent on the angular position of the  
  > shaft.  

## Docs  

  » Sensor - (https://github.com/rwaldron/johnny-five/wiki/Sensor)              
  » Fn - (https://github.com/rwaldron/johnny-five/blob/master/lib/fn.js)        

## Hints  

  » A potentiometer is another use case for the Sensor object...                
  » A pot produces input values between 0 and 1023.                             
  » A servo can typically be moved between 0 and 179 degrees.                   
  » five.Fn.map can map the pot values (0 - 1023) to servo angles (0 -                                                                            
    179).                                                                       

─────────────────────────────────────────────────────────────────────────────  

  » To print these instructions again, run: nodebot-workshop print              
  » To execute your program in a test environment, run: nodebot-workshop                                                                            
    run program.js                                                              
  » To verify your program, run: nodebot-workshop verify program.js             
  » For help run: nodebot-workshop help                                         
