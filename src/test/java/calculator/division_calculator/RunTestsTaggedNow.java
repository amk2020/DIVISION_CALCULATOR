package calculator.division_calculator;


import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(tags = { "@now", "~@manual"}, 
features = "src/test/resources",
glue = { "calculator.division_calculator" },
format = {"pretty","html:target/cucumber-html-report","json:target/cucumber.json", "junit:taget/junit_cucumber.xml"}, 
monochrome = true, 
strict = false)
public class RunTestsTaggedNow {
	
}
