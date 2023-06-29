@example
Feature: Login Feature

    Background:
        Given Example Go to login page
    Scenario Outline: Example User successfully login
        When Example Enter user email "<email>" and password "<password>"
        Then Example Click on login button
        Then Example Login successfully
        Examples:
            | email                   | password   |
            | amanch.2812@gmail.com   | aman@12123 |
            | namanch.28212@gmail.com | anamna#e12 |

