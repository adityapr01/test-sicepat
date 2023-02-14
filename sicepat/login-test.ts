import { expect, test } from "@playwright/test"

test.describe("Verify user to login testing", () => {
    test("login-testing-valid", async ({page}) => {
        //open site -> direct url
        await page.goto("https://www.saucedemo.com/")

        
        //input email and password
        await page.fill("input[id='user-name']", "standard_user" )
        await page.fill("input[id='password']", "secret_sauce")
        await page.click("input[id='login-button']")
    });

    test("login-testing-invalid", async ({page}) => {
        //open site -> direct url
        await page.goto("https://www.saucedemo.com/")

        //input email and password
        await page.fill("input[id='user-name']", "waswas-dong" )
        await page.fill("input[id='password']", "waswas-dong")
        await page.click("input[id='login-button']")

        //assertions

        await expect(page.getByTestId('root'), 'Epic sadface: Username and password do not match any user in this service').toBeHidden();
    });

    test("login-testing-locked", async ({page}) => {
        //open site
        await page.goto("https://www.saucedemo.com/")

        //input email and password
        await page.fill("input[id='user-name']", "locked_out_user" )
        await page.fill("input[id='password']", "secret_sauce")
        await page.click("input[id='login-button']")

        //assertions

        await expect(page.getByTestId('root'), 'Epic sadface: Sorry, this user has been locked out.').toBeHidden();
    });

    test("logout-testing", async ({page}) => {
        //open site
        await page.goto("https://www.saucedemo.com/")

        //input email and password
        await page.fill("input[id='user-name']", "standard_user" )
        await page.fill("input[id='password']", "secret_sauce")
        await page.click("input[id='login-button']")

        //assertions
        await expect(page.getByTestId('root'), 'Epic sadface: Username and password do not match any user in this service').toBeHidden();

        //logout function
        await page.click("button[id='react-burger-menu-btn']")
        await page.click("a[id='logout_sidebar_link']")
    });

});