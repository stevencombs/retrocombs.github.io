# Python Hello World Language Demonstration
# Python 3 Example
# Coding Novice: Steven B. Combs, Ph.D.

# import function
import sys
import datetime, time

# initialize variables
dateToday = str(datetime.date.today())
timeNow = time.time()

def userInput():
	global fname
	fname = input ('Enter your first name: ')
	global n1
	n1 = input('Enter a number: ')
	global n2
	n2 = input('Enter another number: ')
	return

def dataProcessing():
	# Separate first and last name into two variables (fname & lname)
	# Separate first and second number into two variables (n1 & n2)
	# Is first number greater than the second?
	return

def dataOutput():
	print ('Hello ' + fname)
	print ('You are running Python version ' + sys.version)
	print ('The current date and time: ' + time.ctime())
	print ('')
	# print the first number is greater or less than the second number
	# print the larger number minus the smaller number
	# print the sum the two numbers
	# print the multiplication of the two numbers
	return

def helloWorldLoop():
	for x in range(1, 11):
		print (str(x) + '. Hello World!')
	return
	
userInput ()
dataProcessing()
dataOutput()
helloWorldLoop()