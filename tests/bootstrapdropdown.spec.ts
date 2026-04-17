import { test,expect,Locator } from "@playwright/test";
test("bootstrap", async ({page})=>
{
    await page.goto("https://www.htmlelements.com/demos/dropdownlist/multiple-selection/")
    //await page.waitForSelector("smart-drop-down-list",{state:"visible"})
    const frame = page.frameLocator(".demo-frame");
    const dropdown:Locator= frame.locator("smart-drop-down-list")
    await dropdown.click()
    const dropdowncontents:Locator=frame.locator("smart-list-item div div");
    console.log("number of options",await dropdowncontents.count())
    const count:number=await dropdowncontents.count()
    // for(let i=0;i<await count;i++)
    // {
    //     console.log(await dropdowncontents.nth(i).textContent())
        

    // }
    //select specific option
    for(let i=0;i<count;i++)
    {
        const text:string=await dropdowncontents.nth(i).innerText()
        if(text=="Bicerin"||text=="Alabala")
        {
            await dropdowncontents.nth(i).click();

        }
        

    }
    
})