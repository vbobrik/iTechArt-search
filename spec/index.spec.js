const { Builder, By, Key } = require('selenium-webdriver');
const URL = 'https://www.google.by/';
const input = 'iTechArt';
let originalTimeout;

beforeEach(function () {
    originalTimeout = jasmine.DEFAULT_TIMEOUT_INTERVAL;
    jasmine.DEFAULT_TIMEOUT_INTERVAL = 100000;
});

afterEach(function () {
    jasmine.DEFAULT_TIMEOUT_INTERVAL = originalTimeout;
});

describe("search itechart", function () {
    it("find all sites with 'ithechart'", async function () {
        try {
            const driver = await new Builder().forBrowser('chrome').build();
            await driver.get(URL);
            await driver.findElement(By.name("q")).sendKeys(input, Key.ENTER);

            let elements = await driver.findElements(By.className('g'));
            console.log(elements.length);
            console.log(elements);

            for (let elem of elements) {
                const output = await elem.getText();
                console.log(output);
                expect(output).toContain(input);
            }
        }
        catch (err) {
            console.error(err);
        }
    })
})