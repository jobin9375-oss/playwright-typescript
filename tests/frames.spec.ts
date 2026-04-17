import { test,expect,Locator } from "@playwright/test";
test("frames ", async ({page})=>
{
    await page.goto("https://demo.automationtesting.in/Frames.html")
    const frame=page.frame({url:"https://demo.automationtesting.in/SingleFrame.html"}) //here instead of URL name attribute also can use
    await frame?.locator("(//input[@type='text'])[1]").fill("ggg")

    //using frame locator 
    await page.getByText("Iframe with in an Iframe").click()

    await page.frameLocator("iframe[style='float: left;height: 250px;width: 400px']").locator(" (//input[@type='text'])[1]").fill("hello")

})
