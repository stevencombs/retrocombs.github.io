/*

Code Objective

   Push encoder to turn on LED and servo control
   Rotate encoder to move servo
   Push encoder to turn off LED and servo control

Code by: Steven B. Combs (steven.combs@gmail.com)
Code date: 2020-03-08

*/

#include <Servo.h>

#define pinCLK 5
#define pinDT 4

Servo myservo;

int counter = 0;
int delayTime = 200;
int currentStateCLK;
int previousStateCLK;
int buttonPin = 6;
int ledPin = 11;
int buttonPress = false;

void setup() {
  myservo.attach(9);
  pinMode(buttonPin, INPUT_PULLUP);
  pinMode(ledPin, OUTPUT);
  previousStateCLK = digitalRead(pinCLK);
}

void loop() {
  if (digitalRead(buttonPin) == false) {
    buttonPress = !buttonPress;
    digitalWrite(ledPin, buttonPress);
    servo();
  }
  while (digitalRead(buttonPin) == false);
  delay(delayTime);
}

void servo() {
  while (buttonPress == true) {
  currentStateCLK = digitalRead(pinCLK);
  if (currentStateCLK != previousStateCLK) {
  if (digitalRead(pinDT) != currentStateCLK) {
   counter --;
    if (counter < 0){
     counter = 0;
     }
    } else {
     counter ++;
      if (counter > 180) {
       counter = 180;
      }
    }
    myservo.write(counter * 6);
  previousStateCLK = currentStateCLK;
  }
  button();
 }
}

void button() {
  if (digitalRead(buttonPin) == false) {
    delay(delayTime);
    loop();
  }
}
