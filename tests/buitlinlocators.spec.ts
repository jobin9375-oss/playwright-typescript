import { test,expect,Locator } from "@playwright/test";
import { link } from "node:fs";
test("built in locators", async ({page})=>
{
    await page.goto("https://demo.nopcommerce.com/");
    // const electronics:Locator=page.getByAltText("Picture for category Electronics");
    // await electronics.click();
   // await page.getByText(" Computers ").click()
   await page.getByRole('link',{name:"Register"}).click()
   await page.getByRole('textbox',{name:"First name:"}).fill("hello")

})