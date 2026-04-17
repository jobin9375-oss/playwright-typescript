import { test,expect,Locator } from "@playwright/test";
test("drop down actions", async ({page})=>
{
    await page.goto("https://testautomationpractice.blogspot.com/")

    //select tag dropdown
    const selectdropdown:Locator=page.locator("#country");
    await selectdropdown.selectOption({label:"France"}) //by using label
    await selectdropdown.selectOption({value:"uk"}) //iusing value
    await selectdropdown.selectOption("India")// using visible text
    await selectdropdown.selectOption({index:5})//using index

    //count options in dropdown
    const dropdownoptions:Locator=page.locator("#country option");
    await expect(dropdownoptions,"count is wrong").toHaveCount(10)
    const contents:Array<string>=(await dropdownoptions.allTextContents()).map(text=>text.trim())
    console.log(contents)
    expect(contents).toContain("India")

   
        if(contents.includes("India"))
        {
            console.log("option present in an array")
        }
        else{
            console.log("option is not present in an array")
            
        }



    
})