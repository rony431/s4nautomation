Feature: Test s4n Automation
  As User I want verify s4n test page

  Scenario: View form
    Given User wants to create account s4n test page
    When fill up correctly the fields
    Then it clicks on create account and confirm alert

Scenario: verify Fields
    Given User wants to create account s4n test page
    When fill up incorrectly birthDate
    Then it clicks on create account and confirm fields messages

Scenario: verify Gender mandatory
    Given User wants to create account s4n test page
    When fill up correctly without click on gender
    Then it clicks on create account and confirm message of gender

Scenario: verify page title
    Given User wants to create account s4n test page
    Then verify page title

Scenario: verify terms and conditions
    Given User wants to create account s4n test page
    Then verify terms and conditions copy