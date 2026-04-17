import { test,expect,Locator } from "@playwright/test";
test("auto suggest", async ({page})=>
{
    await page.goto("https://www.flipkart.com/")
    await page.locator("//span[normalize-space()='✕']").click()
    await page.locator("//form[@class='lilxh_ header-form-search']//input[@placeholder='Search for Products, Brands and More']").fill("smart")
    await page.waitForSelector("ul li", { state: "visible" })

    // ✅ use stable locator instead of dynamic class names
    const options: Locator = page.locator("ul[class*='VCplLH'] li")
    const count:number=await options.count();
    // const suggesion:Array<string>=await options.allInnerTexts()
    // console.log(await options.allTextContents())
    // for(let i=0;i<count;i++)
    // {
    //     const text=await options.nth(i).textContent()
    //     if(text=="smart tv")
    //     {
    //         await options.nth(i).click()
    //         break;
    //     }
    // }
    await options.filter({ hasText: "smart tv" }).first().click()
    
})