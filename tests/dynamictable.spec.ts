import { test,expect,Locator } from "@playwright/test";
test("dynamic webtable", async ({page})=>
{
    await page.goto("https://testautomationpractice.blogspot.com/")
    const table:Locator=page.locator("#taskTable tbody");
    const chromeelement:Locator=table.locator("tr:has-text('Chrome')")
    const cpuusage:Locator=chromeelement.locator("td:has-text('%')")
    console.log("chorme cpu usage is",await cpuusage.textContent())

    //using loop

    const rows:Locator[]=await table.locator("tr").all()
    for( const r of rows)
    {
        const value:string=await r.locator("td").nth(0).innerText()
        if(value=="System")
        {
            const usage=await r.locator("td:has-text('%')").innerText()
            console.log("system cpu usage is",usage)
        }

    }
    
    


})