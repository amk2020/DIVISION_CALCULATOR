@now
Feature: Calculate division of two integers
	As a User
	I want to perform division operation
	So that I can get the correct outcome

Scenario Outline: Calculate the division of two integers  
    Given : I am on Calculator App
    When :  I perform division of integers <Dividend> on <Divisor> 
    Then :  I get the respective <Quotient>
		
    Examples: 
      | Dividend | Divisor 	| Quotient				 	|
      | Dividend1| Divisor1 | Quotient1 				|
      | Dividend2| Divisor2 | Quotient2 				|
      | Dividend3| Divisor3 | Quotient3 				|
      | Dividend4| Divisor4 | Quotient4 				|
      | Dividend5| Divisor5 | Quotient5 				|
