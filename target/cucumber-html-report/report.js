$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("calculator.feature");
formatter.feature({
  "line": 2,
  "name": "Calculate division of two integers",
  "description": "As a User\nI want to perform division operation\nSo that I can get the correct outcome",
  "id": "calculate-division-of-two-integers",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@now"
    }
  ]
});
formatter.scenarioOutline({
  "line": 7,
  "name": "Calculate the division of two integers",
  "description": "",
  "id": "calculate-division-of-two-integers;calculate-the-division-of-two-integers",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 8,
  "name": ": I am on Calculator App",
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": ":  I perform division of integers \u003cDividend\u003e on \u003cDivisor\u003e",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": ":  I get the respective \u003cQuotient\u003e",
  "keyword": "Then "
});
formatter.examples({
  "line": 12,
  "name": "",
  "description": "",
  "id": "calculate-division-of-two-integers;calculate-the-division-of-two-integers;",
  "rows": [
    {
      "cells": [
        "Dividend",
        "Divisor",
        "Quotient"
      ],
      "line": 13,
      "id": "calculate-division-of-two-integers;calculate-the-division-of-two-integers;;1"
    },
    {
      "cells": [
        "Dividend1",
        "Divisor1",
        "Quotient1"
      ],
      "line": 14,
      "id": "calculate-division-of-two-integers;calculate-the-division-of-two-integers;;2"
    },
    {
      "cells": [
        "Dividend2",
        "Divisor2",
        "Quotient2"
      ],
      "line": 15,
      "id": "calculate-division-of-two-integers;calculate-the-division-of-two-integers;;3"
    },
    {
      "cells": [
        "Dividend3",
        "Divisor3",
        "Quotient3"
      ],
      "line": 16,
      "id": "calculate-division-of-two-integers;calculate-the-division-of-two-integers;;4"
    },
    {
      "cells": [
        "Dividend4",
        "Divisor4",
        "Quotient4"
      ],
      "line": 17,
      "id": "calculate-division-of-two-integers;calculate-the-division-of-two-integers;;5"
    },
    {
      "cells": [
        "Dividend5",
        "Divisor5",
        "Quotient5"
      ],
      "line": 18,
      "id": "calculate-division-of-two-integers;calculate-the-division-of-two-integers;;6"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 14,
  "name": "Calculate the division of two integers",
  "description": "",
  "id": "calculate-division-of-two-integers;calculate-the-division-of-two-integers;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@now"
    }
  ]
});
formatter.step({
  "line": 8,
  "name": ": I am on Calculator App",
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": ":  I perform division of integers Dividend1 on Divisor1",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": ":  I get the respective Quotient1",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "CalculatorStepdefs.i_am_on_Calculator_App()"
});
formatter.result({
  "duration": 85512339,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 42
    },
    {
      "val": "1",
      "offset": 54
    }
  ],
  "location": "CalculatorStepdefs.i_perform_division_of_integers_Dividend_on_Divisor(int,int)"
});
formatter.result({
  "duration": 1505380,
  "error_message": "java.lang.NullPointerException\n\tat calculator.division_calculator.CalculatorStepdefs.i_perform_division_of_integers_Dividend_on_Divisor(CalculatorStepdefs.java:37)\n\tat ✽.When :  I perform division of integers Dividend1 on Divisor1(calculator.feature:9)\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 32
    }
  ],
  "location": "CalculatorStepdefs.i_get_the_respective_Quotient(int)"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 15,
  "name": "Calculate the division of two integers",
  "description": "",
  "id": "calculate-division-of-two-integers;calculate-the-division-of-two-integers;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@now"
    }
  ]
});
formatter.step({
  "line": 8,
  "name": ": I am on Calculator App",
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": ":  I perform division of integers Dividend2 on Divisor2",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": ":  I get the respective Quotient2",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "CalculatorStepdefs.i_am_on_Calculator_App()"
});
formatter.result({
  "duration": 71822,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 42
    },
    {
      "val": "2",
      "offset": 54
    }
  ],
  "location": "CalculatorStepdefs.i_perform_division_of_integers_Dividend_on_Divisor(int,int)"
});
formatter.result({
  "duration": 361930,
  "error_message": "java.lang.NullPointerException\n\tat calculator.division_calculator.CalculatorStepdefs.i_perform_division_of_integers_Dividend_on_Divisor(CalculatorStepdefs.java:37)\n\tat ✽.When :  I perform division of integers Dividend2 on Divisor2(calculator.feature:9)\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 32
    }
  ],
  "location": "CalculatorStepdefs.i_get_the_respective_Quotient(int)"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 16,
  "name": "Calculate the division of two integers",
  "description": "",
  "id": "calculate-division-of-two-integers;calculate-the-division-of-two-integers;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@now"
    }
  ]
});
formatter.step({
  "line": 8,
  "name": ": I am on Calculator App",
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": ":  I perform division of integers Dividend3 on Divisor3",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": ":  I get the respective Quotient3",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "CalculatorStepdefs.i_am_on_Calculator_App()"
});
formatter.result({
  "duration": 97656,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "3",
      "offset": 42
    },
    {
      "val": "3",
      "offset": 54
    }
  ],
  "location": "CalculatorStepdefs.i_perform_division_of_integers_Dividend_on_Divisor(int,int)"
});
formatter.result({
  "duration": 255948,
  "error_message": "java.lang.NullPointerException\n\tat calculator.division_calculator.CalculatorStepdefs.i_perform_division_of_integers_Dividend_on_Divisor(CalculatorStepdefs.java:37)\n\tat ✽.When :  I perform division of integers Dividend3 on Divisor3(calculator.feature:9)\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "3",
      "offset": 32
    }
  ],
  "location": "CalculatorStepdefs.i_get_the_respective_Quotient(int)"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 17,
  "name": "Calculate the division of two integers",
  "description": "",
  "id": "calculate-division-of-two-integers;calculate-the-division-of-two-integers;;5",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@now"
    }
  ]
});
formatter.step({
  "line": 8,
  "name": ": I am on Calculator App",
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": ":  I perform division of integers Dividend4 on Divisor4",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": ":  I get the respective Quotient4",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "CalculatorStepdefs.i_am_on_Calculator_App()"
});
formatter.result({
  "duration": 70221,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "4",
      "offset": 42
    },
    {
      "val": "4",
      "offset": 54
    }
  ],
  "location": "CalculatorStepdefs.i_perform_division_of_integers_Dividend_on_Divisor(int,int)"
});
formatter.result({
  "duration": 238857,
  "error_message": "java.lang.NullPointerException\n\tat calculator.division_calculator.CalculatorStepdefs.i_perform_division_of_integers_Dividend_on_Divisor(CalculatorStepdefs.java:37)\n\tat ✽.When :  I perform division of integers Dividend4 on Divisor4(calculator.feature:9)\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "4",
      "offset": 32
    }
  ],
  "location": "CalculatorStepdefs.i_get_the_respective_Quotient(int)"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 18,
  "name": "Calculate the division of two integers",
  "description": "",
  "id": "calculate-division-of-two-integers;calculate-the-division-of-two-integers;;6",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@now"
    }
  ]
});
formatter.step({
  "line": 8,
  "name": ": I am on Calculator App",
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": ":  I perform division of integers Dividend5 on Divisor5",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": ":  I get the respective Quotient5",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "CalculatorStepdefs.i_am_on_Calculator_App()"
});
formatter.result({
  "duration": 78681,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "5",
      "offset": 42
    },
    {
      "val": "5",
      "offset": 54
    }
  ],
  "location": "CalculatorStepdefs.i_perform_division_of_integers_Dividend_on_Divisor(int,int)"
});
formatter.result({
  "duration": 267991,
  "error_message": "java.lang.NullPointerException\n\tat calculator.division_calculator.CalculatorStepdefs.i_perform_division_of_integers_Dividend_on_Divisor(CalculatorStepdefs.java:37)\n\tat ✽.When :  I perform division of integers Dividend5 on Divisor5(calculator.feature:9)\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "5",
      "offset": 32
    }
  ],
  "location": "CalculatorStepdefs.i_get_the_respective_Quotient(int)"
});
formatter.result({
  "status": "skipped"
});
});