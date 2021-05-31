var { Builder } = require('selenium-webdriver')
var { Key } = require('selenium-webdriver')
var { By } = require('selenium-webdriver')

describe('Testing', () => {
    describe('Set up chrome driver', () => {
        it('', async function(){
            driver = new Builder().forBrowser('chrome').build()
        })
    })

    describe('Execute tests', () => {
        it('', async function () {
            driver = new Builder().forBrowser('chrome').build()
            await driver.get("https://google.com")
            var input = await driver.findElement(By.name("q"))
    
            if ( input == null )
                throw new Error()
        });
        it('Search on Google passes', async  function() {
            driver = new Builder().forBrowser('chrome').build()
            await driver.get("https://google.com")
            var input = await driver.findElement(By.name("q"))
            await input.sendKeys('Hello world from selenium!', Key.ENTER)
        })
        it('Get search box text passes', async  function() {
            driver = new Builder().forBrowser('chrome').build()
            await driver.get("https://google.com")
            var input = await driver.findElement(By.name("q"))
            await input.sendKeys('Hello world from selenium!', Key.ENTER)
            var value = await input.getAttribute('value')
    
            if ( value != 'Hello world from selenium!' )
                throw new Error()
        })
    })
    it('Quit driver', async function () {
        driver = new Builder().forBrowser('chrome').build()
        await driver.quit()
    });
});

async function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}