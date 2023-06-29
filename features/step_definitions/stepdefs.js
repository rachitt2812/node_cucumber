const assert = require('assert');
const { Given, When, Then } = require('@cucumber/cucumber');
const { Builder, By, Capabilities, Key } = require('selenium-webdriver');
const { expect } = require('chai');
require("chromedriver");
const { afterAll } = require('mocha');


// driver setup
const capabilities = Capabilities.chrome();
capabilities.set('chromeOptions', { "w3c": false });
const driver = new Builder().withCapabilities(capabilities).build();

Given('Simple Go to login page', async function () {

    await driver.get('http://localhost:3000/');
});

When('Simple Enter user email {string} and password {string}', async function (string, string2) {



    const usernameElement = await driver.findElement(By.name('username'));
    usernameElement.sendKeys(string, Key.RETURN);

    const passwordElement = await driver.findElement(By.name('password'));
    passwordElement.sendKeys(string2, Key.RETURN);

    const loginBtn = await driver.findElement(By.name('submitBtn'));
    loginBtn.click();

});

Then('Simple Click on login button', function () {

});

Then('Simple Login successfully {string}', function (string) {
    driver.quit();
});