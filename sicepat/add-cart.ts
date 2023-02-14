import { chromium, expect, test } from "@playwright/test"

test.describe("Verify user to get name and get price", () => {
    test("click-details-products", async ({page}) => {
        //open site -> direct url
        await page.goto("https://www.saucedemo.com/")

        //input email and password
        await page.fill("input[id='user-name']", "standard_user" )
        await page.fill("input[id='password']", "secret_sauce")
        await page.click("input[id='login-button']")

          //Verify get name products 1
          const getNameItems = await page.locator("(//div[@class='inventory_item_name'])[1]").textContent()
          console.log("Get Name products?" +getNameItems)
  
          //Verify get pricing products 1
          const getPrice = await page.locator("(//div[@class='inventory_item_price'])[1]").textContent()
          console.log("Get Price is"+getPrice)

          //Verify get name products 2
          const getNameItems2 = await page.locator("(//div[@class='inventory_item_name'])[2]").textContent()
          console.log("Get name items is : " +getNameItems2)

          //Verify get price products 2
          const getPrice2 = await page.locator("(//div[@class='inventory_item_price'])[2]").textContent()
          console.log("Get price is : " +getPrice2)
        
        
          //Verify click details products and get name and price
          await page.click("(//div[@class='inventory_item_name'])[1]")
          const getNameDetail = await page.locator("//div[@class='inventory_details_name large_size']").textContent()
          console.log("Get name details is : " +getNameDetail)

          const getPricedetail = await page.locator("(//div[text()='Sauce Labs Backpack']/following-sibling::div)[2]").textContent()
          console.log("Get Price details is : " +getPricedetail)

          //redirect back to dashboard
          await page.click("//button[contains(@class,'btn btn_secondary')]")

         //Verify clcik details products and get name and price 2
         await page.click("//div[text()='Sauce Labs Bike Light']")
         const getNameDetail2 = await page.locator("//div[text()='Sauce Labs Bike Light']").textContent()
         console.log("Get Name Details is : " +getNameDetail2)

         const getPriceDetails2 = await page.locator("//div[text()='9.99']").textContent()
         console.log("Get Price Details is : " +getPriceDetails2)

         await page.click("button[id='back-to-products']")
        
    });
});

test.describe("Verify user to add cart", () => {
    test("add-cart-transaction", async ({page}) => {
        //open site -> direct url
        await page.goto("https://www.saucedemo.com/")

        //input email and password
        await page.fill("input[id='user-name']", "standard_user" )
        await page.fill("input[id='password']", "secret_sauce")
        await page.click("input[id='login-button']")

        //add cart
        await page.click("(//button[contains(@class,'btn btn_primary')])[1]")
        await page.click("(//button[contains(@class,'btn btn_primary')])[2]")
        //await page.waitForTimeout(3000);

        //click button basketcase
        await page.click("//div[@class='header_label']/following-sibling::div[1]")
        //await page.waitForTimeout(5000);

        //get name and price on checkout
        const getNameCheckout = await page.locator("(//div[@class='inventory_item_name'])[1]").textContent()
        console.log("Get Name checkout is : " +getNameCheckout)
        const getPriceCheckout = await page.locator("//div[text()='29.99']").textContent()
        console.log("Get Price checkout is : " +getPriceCheckout)

        const getNameCheckout2 = await page.locator("(//div[@class='inventory_item_name'])[2]").textContent()
        console.log("Get Name Checkout is :" +getNameCheckout2)
        const getPriceCheckout2 = await page.locator("(//div[@class='inventory_item_price'])[2]").textContent()
        console.log("Get Price Checkout is :" +getPriceCheckout2)

        //Process Checkout
        await page.click("button[id='checkout']")
        //await page.waitForTimeout(60000);

        //input user send
        await page.fill("input[id='first-name']", "Elvie")
        await page.fill("input[id='last-name']", "Sukaesih")
        await page.fill("input[id='postal-code']", "41314")
        await page.click("//input[contains(@class,'submit-button btn')]")
        await page.waitForTimeout(5000);


        //checkout overview
        //payment information
        const paymentinformation = await page.locator("(//div[@class='summary_value_label'])[1]").textContent()
        console.log("Payment Information : " +paymentinformation)

        //Shipping information
        const shipInformation = await page.locator("(//div[@class='summary_value_label'])[2]").textContent()
        console.log("Shipping Inforamtion : " +shipInformation)

        //total
        const itemPrice = await page.locator("(//div[@class='summary_value_label'])[2]").textContent()
        console.log("Item Total : " +itemPrice)
        const Tax = await page.locator("(//div[@class='summary_value_label'])[2]").textContent()
        console.log("Tax : " +Tax)
        const Total = await page.locator("//div[@class='summary_tax_label']/following-sibling::div[1]").textContent()
        console.log("Total : " +Total)

        //click button finish
        await page.click("//button[@data-test='finish']")
        //await page.waitForTimeout(8000);

 
    });
});


