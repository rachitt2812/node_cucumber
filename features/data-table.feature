@datatable
Feature: Login Feature

    Scenario: DataTable User successfully login
        Given DataTable Go to login page
        When DataTable Login with different different users
            | email                                        | password |
            | amanaaaaaaaaaaaaaaaaaaaaaaaaaa@knplabs.com   | 12412312 |
            | aman11111111111111111111111111@symfony.com   | 1424214  |
            | aman222222222222222222222222222@symfony.com  | 1424214  |
            | aman3333333333333333333333333333@symfony.com | 1424214  |
        Then DataTable close the chrome