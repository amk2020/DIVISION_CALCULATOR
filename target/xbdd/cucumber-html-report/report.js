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
formatter.scenario({
  "line": 7,
  "name": "Calculate the division operation on two numbers",
  "description": "Given: I have 4 and 2\nWhen: performed division operation\nThen: I should see the result as 2",
  "id": "calculate-division-of-two-integers;calculate-the-division-operation-on-two-numbers",
  "type": "scenario",
  "keyword": "Scenario"
});
});