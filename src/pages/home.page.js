const {browser, element, by, ExpectedConditions} = require("protractor");

function HomePage() {

    return {
        async hoverToWomenTab() {
            await  browser.actions().mouseMove(element(by.css("a[title='Women']"))).perform();
        },


        async clickOnTshirtSubMenu() {
            await element(by.css(".submenu-container a[title='T-shirts']")).click();
        },

        async addFirstProductToCart() {
           let productContainerEle = element.all(by.css(".product_list .product-container")).get(0);
           await browser.actions().mouseMove(productContainerEle).perform();
           let addToCardEle = element(by.css("a[title='Add to cart']"));
           await addToCardEle.click();
        },

        async clickOnProceedToCheckoutButton() {
            let checkoutButtonEle = element(by.css("a[title='Proceed to checkout']"));
            await browser.wait(ExpectedConditions.elementToBeClickable(checkoutButtonEle));
            await checkoutButtonEle.click();
        },

        async clickOnSignButton() {
            const signInButton = element(by.css(".login"));
            await browser.wait(ExpectedConditions.elementToBeClickable(signInButton));
            await signInButton.click();
        },

        async login(email, password) {
            const emailInputEle = element(by.id("email"));
            await emailInputEle.sendKeys(email);
            await element(by.id("passwd")).sendKeys(password);
            await element(by.id("SubmitLogin")).click();
        },

        async clickOnViewCart() {
            await element(by.css("a[title='View my shopping cart']")).click();

        },


        async completeTheOrder() {
            const proceedToCheckoutButton = element(by.css(".cart_navigation button"));
            await element(by.css(".cart_navigation a[title='Proceed to checkout']")).click();
            await proceedToCheckoutButton.click();
            await element(by.css("#uniform-cgv input")).click();
            await proceedToCheckoutButton.click();

        },

        async getNavigationPageText() {
            return element(by.css(".navigation_page")).getText();

        },

        async clickOnPayByBankWire() {
            return element(by.css("a[title='Pay by bank wire']")).click();
        },

        async clickOnConfirmMyOrderButton() {
            return element(by.css("#cart_navigation button")).click();
        },

        async getOrderCompleteMessage() {
            return element(by.css(".cheque-indent strong")).getText();
        }


    }
}

module.exports = HomePage();

