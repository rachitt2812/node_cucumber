@simple
Feature: Login Feature

  Scenario: Simple User successfully login
    Given Simple Go to login page
    When Simple Enter user email "aman@gmail" and password "aman@1234"
    Then Simple Click on login button
    Then Simple Login successfully "aman@gmail"