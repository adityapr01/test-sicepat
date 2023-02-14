import { chromium, test } from "@playwright/test"

test.describe("Verify when user to get name, price and click-products", () => {
    test("get-pricingproducts1", async ({page}) => {

        const browser = await chromium.launch()

        //open site -> direct url
        await page.goto("https://www.saucedemo.com/")

        //input email and password       
        await page.fill("input[id='user-name']", "standard_user" )
        await page.fill("input[id='password']", "secret_sauce")

        //click button login
        await page.click("input[id='login-button']")

        //Verify get name products
        const getNameItems = await page.locator("(//div[@class='inventory_item_name'])[1]").textContent()
        console.log("Get Name products?" +getNameItems)

        //Verify get pricing products
        const getPrice = await page.locator("(//div[@class='inventory_item_price'])[1]").textContent()
        console.log("Get Price is"+getPrice)

        //Verify clickproducts
        await page.click("//a[.='Sauce Labs Backpack']")
    });
     
});

test.describe("Verify when user click details products", () => {
    test("click details2 products", async ({page}) => {
        //open site -> direct url
        await page.goto("https://www.saucedemo.com/")

        //input email and password
        await page.fill("input[id='user-name']", "standard_user" )
        await page.fill("input[id='password']", "secret_sauce")

        //click button login
        await page.click("input[id='login-button']")

        //click products
        await page.click("(//div[@class='inventory_item_name'])[1]")

        //getprice
        const getPricedetails = await page.locator("//div[@class='inventory_details_desc large_size']/following-sibling::div[1]").textContent()
        console.log("Get Price is" +getPricedetails)

        //backtodashboard
        await page.click("//button[@data-test='back-to-products']")

    });

    test("To click products", async ({page}) => {

        //open site -> direct url
        await page.goto("https://www.saucedemo.com/")
    
        //input email and password
        await page.fill("input[id='user-name']", "standard_user" )
        await page.fill("input[id='password']", "secret_sauce")
    
        //click button login
        await page.click("input[id='login-button']")
    
       //getname
       const getName = await page.locator("(//div[@class='inventory_item_name'])[2]").textContent()
       console.log("Get Name is " +getName)

       //getPrice
       const getPrice = await page.locator("(//div[@class='inventory_item_price'])[2]").textContent()
       console.log("Get Price is " +getPrice)

       //click details products
       await page.click("(//div[@class='inventory_item_name'])[2]")

       const getNameDetail = await page.locator("//div[@class='inventory_details_name large_size']").textContent()
       console.log("Get Name Details is? " +getNameDetail)

       const getPricedetail = await page.locator("//div[text()='9.99']").textContent()
       console.log("Get Price Details is" +getPricedetail)

       //click back to dashboard
       await page.click("//button[contains(@class,'btn btn_secondary')]")

     });    
});
