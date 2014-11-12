# Break Time
# Python
# Dr. Steven B. Combs

import webbrowser
import time

def prompt_user():
	# allow variables outside of function
	global breaks, interval, web_address
	# request input 
	breaks = input('Enter number of breaks: ')
	interval = input('Enter the interval in seconds: ')
	web_address = input('Enter a URL (exlude http://): ')
	
def run_timer():
	# insert timer code here
	return
	
def load_web():
	webbrowser.open('http://'+web_address)
	return

prompt_user()
run_timer()
load_web()

#	
#load functions (if needed and based on language):
#
#function to prompt user:
#
#* prompt for number of breaks
#* prompt for interval between breaks
#* prompt for URL
#* if number of breaks is 0
#	* print message "If you don't need a break, why'd you ask?"
#	* quit program
#* if number of breaks is greater than 12
#	* print message "You work too hard. Get a social life now!"
#	* quit program
#
#function for loop:
#
#* do while breaks is less than or equal to requested breaks
#	* wait for requested period
#	* run function to load web page
#	* breaks is equal to breaks plus one
#

#
#run prompt user function
#run loop program function
#run load URL function