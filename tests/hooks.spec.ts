import { test,expect,Locator,Page } from "@playwright/test";
let page:Page;
test.beforeEach('before each test ',async ({browser})=>
{
    page=await browser.newPage();
    await page.goto("https://datatables.net/")

})
test("pagination table display data", async ({})=>
{
    
    let pages=true;
    while(pages)
    {
    const tablerows:Array<Locator>=await page.locator("#example tbody tr").all()

    for( let row of tablerows)
    {
        const rows=await row.innerText()
        console.log(rows)
    }
    
    const nextbutton:Locator=page.locator("button[aria-label='Next']")
    const isdisabled:string|null=await nextbutton.getAttribute("class")
    if(isdisabled?.includes("disabled"))
    {
        pages=false;
    }
    else
    {
        await nextbutton.click()
    }
}
    
})
test("filter rows", async ({})=>
{
    const dropdown:Locator=page.locator("#dt-length-0");
    await dropdown.selectOption("25")
    const tablerows:Array<Locator>=await page.locator("#example tbody tr").all()
    expect(tablerows.length).toBe(25)

})
test("serach item", async ({})=>
{
    await page.locator("#dt-search-0").fill("test")
    const tablerows:Array<Locator>=await page.locator("#example tbody tr").all()
    console.log(tablerows.length)
    if(tablerows.length>1)
    {
        let matchfound=false;
        for(let r of tablerows)
        {
            const rowtext=await r.innerText()
            if(rowtext.includes("test"))
            {
                console.log("serached item present")
                matchfound=true;
                break;


            }

        }

    }
    else
    {
        console.log("no searched item")
    }
    

})