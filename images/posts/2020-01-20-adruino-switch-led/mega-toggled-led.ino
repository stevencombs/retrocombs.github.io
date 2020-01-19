int ledPin = 12;
int buttonPin = 9;
int toggleState = false;

void setup()
{
  pinMode(ledPin, OUTPUT);
  pinMode(buttonPin, INPUT_PULLUP);
}

void loop()
{
  if (digitalRead(buttonPin) == false) {
  toggleState = !toggleState;
  digitalWrite(ledPin, toggleState);
  }
  while (digitalRead(buttonPin) == false);
  delay(50);
}