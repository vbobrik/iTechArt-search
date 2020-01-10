const { Builder, By, Key } = require('selenium-webdriver');
const assert = require('assert');
const URL = 'https://www.google.by/';
const input = 'iTechArt';
let originalTimeout;

(async function () {
    try {
        const driver = await new Builder().forBrowser('chrome').build();
        await driver.get(URL);
        await driver.findElement(By.xpath('//input[@name="q"]')).sendKeys(input);
        const typedField = await driver.findElement(By.xpath('//div[@jsname="VlcLAe"]//input[@class="gNO89b"]'));
             
        await setTimeout(() => {
            typedField.click();
        }, 1000);
        let elements = await driver.findElements(By.xpath('//div[@class="g"]'));
        console.log(elements.length);
        for (let elem of elements) {
            const output = await elem.getText();
            console.log(output);
            assert(output.includes(input), '-----NOOO-----');
        }
    }
    catch (err) {
        console.error(err);
    }
})();
