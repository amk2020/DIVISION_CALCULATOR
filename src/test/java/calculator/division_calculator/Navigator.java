package calculator.division_calculator;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.remote.DesiredCapabilities;

public class Navigator {

	private final String nodeURL ="http://192.168.1.248:4444/wd/hub";
	private final String baseURL = "https://www.google.com/search?q=calculator&oq=calculator&aqs=chrome.0.69i59j0l4j69i60l3.1566j0j4&sourceid=chrome&ie=UTF-8";
	WebDriver webdriver;
	DesiredCapabilities capabilities;
	public Navigator(WebDriver driver, DesiredCapabilities desiredCapabilities) {
		this.webdriver = driver;
		this.capabilities = desiredCapabilities;
		
	 
	}
}
