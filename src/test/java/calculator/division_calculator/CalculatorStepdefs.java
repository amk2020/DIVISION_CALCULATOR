package calculator.division_calculator;

import java.net.URL;
import java.util.HashMap;
import java.util.Map;

import org.openqa.selenium.By;
import org.openqa.selenium.Platform;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class CalculatorStepdefs {
	
	private static CalculatorUtil calculate = CalculatorUtil.TestData_FILE;
	private static CalculatorUtil calculate1 = CalculatorUtil.FIRST_SET;
	private static CalculatorUtil calculate2 = CalculatorUtil.SECOND_SET;
	private static CalculatorUtil calculate3 = CalculatorUtil.THIRD_SET;
	private static CalculatorUtil calculate4 = CalculatorUtil.FOURTH_SET;
	private static CalculatorUtil calculate5 = CalculatorUtil.FIFTH_SET;

	@Given("^: I am on Calculator App$")
	public void i_am_on_Calculator_App() throws Throwable {

	    
	}

	@When("^:  I perform division of integers Dividend(\\d+) on Divisor(\\d+)$")
	public void i_perform_division_of_integers_Dividend_on_Divisor(int arg1, int arg2)  {
	    
		System.out.println(calculate1.getDividend());
		
	}

	@Then("^:  I get the respective Quotient(\\d+)$")
	public void i_get_the_respective_Quotient(int arg1)  {
	   
	    
		
	}
}
