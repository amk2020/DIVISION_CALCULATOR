package calculator.division_calculator;

import java.io.IOException;
import java.net.URL;
import java.util.Properties;


public enum CalculatorUtil {
	TestData_FILE("testdata file", "test.divide.properties"),
	FIRST_SET("1", "Dividend1", "Divisor1","Quotient1"),
	SECOND_SET("2", "Dividend2", "Divisor2","Quotient2"),
	THIRD_SET("3", "Dividend3", "Divisor3","Quotient3"),
	FOURTH_SET("4", "Dividend4", "Divisor4","Quotient4"),
	FIFTH_SET("5", "Dividend5", "Divisor5","Quotient5");
	
	private static Properties properties;
	
	private final int dividend;
	private final int divisor;
	private final int quotient;
	private final int description;
	
	private CalculatorUtil(final int userType, final int description) {
		this.description = description;
		this.dividend = getProperty(userType, "dividend");
		this.divisor = getProperty(userType, "divisor");
		this.quotient = getProperty(userType, "quotient");
	}
	
	public static CalculatorUtil fromString(final String description) {
		for (final CalculatorUtil calculatorUtil : values()) {
			if (calculatorUtil.getDescription().equals(description)) {
				return calculatorUtil;
			}
		}
		throw new IllegalArgumentException(String.format("Unknown number type: '%s'", description));
	}
	
	private static String getProperty(final int userType, final String string) {
		loadProperties();
		return properties.getProperty(String.format("test.%s", userType, string));
	}
	
	
	public int getDividend() {
		return this.dividend;
	}
	public int getDivisor() {
		return this.divisor;
	}
	public int getQuotient() {
		return this.quotient;
	}
	private static void loadProperties() {
		if (properties == null) {
			properties = new Properties();
			final URL dataURL = CalculatorUtil.class.getClassLoader().getResource("test.divide.properties");
			try {
				properties.load(dataURL.openStream());
			} catch (final IOException e) {
				throw new RuntimeException(e);
			}
		}
	}
}
