const assert = require('assert');
const { Given, When, Then } = require('@cucumber/cucumber');
const { Builder, By, Capabilities, Key, until } = require('selenium-webdriver');
const { expect } = require('chai');
require("chromedriver");
const { afterAll } = require('mocha');

var driver = '';
var capabilities = '';

/**---------------------------SIMPLE DATA DIRVEN TEST CASE STEPS --------------------------------*/
Given('Simple Go to login page', async function () {
    // driver setup
    capabilities = Capabilities.chrome();
    capabilities.set('chromeOptions', { "w3c": false });
    driver = new Builder().withCapabilities(capabilities).build();
    await driver.get('http://localhost:3000/');
});

When('Simple Enter user email {string} and password {string}', async function (string, string2) {

    const usernameElement = await driver.findElement(By.name('username'));
    usernameElement.sendKeys(string);

    const passwordElement = await driver.findElement(By.name('password'));
    passwordElement.sendKeys(string2);

    const loginBtn = await driver.findElement(By.name('submitBtn'));
    loginBtn.click();

});

Then('Simple Click on login button', function () {

});

Then('Simple Login successfully {string}', function (string) {
    driver.quit();
});


/**---------------------------EXAMPLE DATA DRIVEN TEST CASE STEPS --------------------------------*/
Given('Example Go to login page', async function () {
    // driver setup
    capabilities = Capabilities.chrome();
    capabilities.set('chromeOptions', { "w3c": false });
    driver = new Builder().withCapabilities(capabilities).build();
    await driver.get('http://localhost:3000/');
});

When('Example Enter user email {string} and password {string}', async function (email, password) {


    const usernameElement = await driver.findElement(By.name('username'));
    usernameElement.sendKeys(email);

    const passwordElement = await driver.findElement(By.name('password'));
    passwordElement.sendKeys(password);

});

Then('Example Click on login button', async function () {
    const loginBtn = await driver.findElement(By.name('submitBtn'));
    loginBtn.click();
});

Then('Example Login successfully', function () {
    driver.quit();
});