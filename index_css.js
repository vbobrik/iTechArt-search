const { Builder, By, Key } = require('selenium-webdriver');
const assert = require('assert');
const URL = 'https://www.google.by/';
const input = 'iTechArt';
let originalTimeout;

(async function () {
    try {
        const driver = await new Builder().forBrowser('chrome').build();
        await driver.get(URL);
        await driver.findElement(By.name("q")).sendKeys('iTechArt', Key.ENTER);

        let elements = await driver.findElements(By.className('g'));
        console.log(elements.length);
        console.log(elements);

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
