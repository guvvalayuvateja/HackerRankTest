const {browser} = require("protractor");
const homePage = require("./../pages/home.page")


describe("Test", () => {

    // eslint-disable-next-line no-undef
    beforeAll(async () => {

        await browser.waitForAngularEnabled(false);
        await browser.manage().window().maximize();

    });

    beforeEach(() => {
        // eslint-disable-next-line no-undef
        jasmine.DEFAULT_TIMEOUT_INTERVAL = 1200000;
    })



    it("Test case", async () => {

        await browser.get("http://automationpractice.com/index.php");
        await browser.sleep(2000);
        await homePage.hoverToWomenTab();
        await homePage.clickOnTshirtSubMenu();
        await homePage.addFirstProductToCart();
        await homePage.clickOnProceedToCheckoutButton();
        await homePage.clickOnSignButton();
        await homePage.login("zip.tester01@zipapp.com", "zip@123");
        await  homePage.clickOnViewCart();
        await homePage.completeTheOrder();
        await homePage.clickOnPayByBankWire();
        await homePage.clickOnConfirmMyOrderButton();

        const orderMsg = await homePage.getOrderCompleteMessage();
        // eslint-disable-next-line no-undef
        expect(orderMsg).toEqual("Your order on My Store is complete.");
    })


    // eslint-disable-next-line no-undef
    afterAll(() => {
        return browser.quit();
    })

});
