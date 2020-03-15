/*
Code Objective
   Push encoder to turn on LED and servo control
   Rotate encoder to move servo
   Push encoder to turn off LED and servo control
;
Code by: Steven B. Combs (steven.combs@gmail.com)
Code date: 2020-03-08
*/

// load the servo library

#include <Servo.h>               // load the servo library
#define SW 4                     // connect SW (switch) to pin 4 on arduino
#define CLK 3                    // connect CLK (clock) to pin 3 on arduino
#define DT 2                     // connect DT (determine rotation) to pin 2 on arduino

// create varialbles

Servo servo;                     // ??
int counter = 0;                 // set a counter to 0
int currentCLK;                  // current CLK pin status
int lastCLK;                     // last CLK pin status
int pinLED = 11;                 // connect led to pin 11
int currentLED = true;           // on/off status off the led
int lastSWpress = 0;             // last button press is 0

// configure arduino hardware and set variables

void setup() {
  pinMode(CLK,INPUT);            // set CLCK to input
  pinMode(DT,INPUT);             // set DT to input
  pinMode(SW,INPUT_PULLUP);      // set SW to input with a pullup
  servo.attach(9);               // servo attached to pin 9
  servo.write(counter);          // set the servo to the counter value (currently 0)
  lastCLK = digitalRead(CLK);    // set lastCLK value to current clock value
}

// main loop - simplified through the use of functions

void loop(){
  buttonPress();                 // jump to buttonPress function
  if (currentLED == 0) {         // if led is on …
   servoControl();               // jump to servoControl function
  }
}

// function to test button press (push dial) on encorder

void buttonPress() {
  lastCLK = currentCLK;                         // set lastCLK to currentCLK
  int buttonState = digitalRead(SW);            // connect SW to PIN 4 on arduino
  if (buttonState == LOW) {                     // if button pressed...
    if (millis() - lastSWpress > 50) {          // ???
      digitalWrite(pinLED, currentLED);         // toggle the led on pin 11
      currentLED = !currentLED;                 // reverse the value to currentLED
    }
    lastSWpress = millis();                     // ???
  }
  delay(1);                                     // wait for software to catch up to hardware
}

// use the encoder to control the servo

void servoControl() {      
  currentCLK = digitalRead(CLK);                      // set currrentCLK to current value to clock
  if (currentCLK != lastCLK && currentCLK == 1){      // if currentCLK is not equal to lastCLK and current CLK is 1
    if (digitalRead(DT) != currentCLK) {              // if DT is not equal to currentCLK...(rotate counter clock-wise)
      counter --;                                     // subtract 1 from counter
      if (counter<0) {                                // if counter is less than 0
        counter=0;                                    // counter is always 0
      }
    } else {                                          // else do this (rotate clock-wise)
      counter ++;                                     // add 1 to the counter
      if (counter>179) {                              // if counter is greater than 179... 
        counter=179;                                  // counter is always 179
      }
    }
    servo.write(counter * 10@);                             // write counter value to servo and rotate
  }
  lastCLK = currentCLK;                               // set lastCLK to currentCLK value
}
