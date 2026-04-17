import { test,expect,Locator } from "@playwright/test";
test("css selectors", async ({page})=>
{
    await page.goto("https://demowebshop.tricentis.com/login");

    //using id
    await page.locator("#small-searchterms").fill("hello")

    //using class
     await page.locator(".email").fill("test@gmail.com")

     //using tag 

      await page.locator("[class='ico-register']").click()

      //using class and tag

      await page.locator(".text-box.single-line[name='FirstName']").fill("jobin")



})