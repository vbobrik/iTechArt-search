const {Builder, By} = require('selenium-webdriver');
const URL = 'https://www.google.by/';

(async function myFunc() {
    try{
const driver = await new Builder().forBrowser('chrome').build();
await driver.get(URL);
await driver.findElement(By.name("q")).sendKeys('iTechArt');
await driver.findElement(By.css('[jsname="VlcLAe"] .gNO89b')).click();

let elements = driver.findElements(By.css('.g'));
await console.log(elements.Count);
(await elements).forEach(item => {
item.click();
driver.findElement().click();
})
    }
    catch(err) {
console.error(err);
    }
})();
