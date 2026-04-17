import { test,expect,Locator } from "@playwright/test";
test("webtable", async ({page})=>
{
    await page.goto("https://testautomationpractice.blogspot.com/")
    const table:Locator=page.locator("table[name='BookTable']")
    await expect(table).toBeVisible();
    const rows:Locator=table.locator("tr") // chaning locator already table has table locator from there row finding except row heading table  tr:not(:first-child)
    await expect(rows).toHaveCount(7)

    //counting column

    const col:Locator=rows.locator("th") //chaning of locator already table row alredy there in rows locator table[name='BookTable'] tr th
    await expect(col).toHaveCount(4)

    //read all data from specic row
    const secondrow:Locator=rows.nth(1).locator("td") // second row data accessing
    const rowdata:Array<string>=await secondrow.allInnerTexts()
    //console.log(rowdata)
    expect(rowdata).toContain("Selenium")
    expect(rowdata).toEqual([ 'Learn Selenium', 'Amit', 'Selenium', '300' ])

    //read all data excpet table column haeding
    const allrowdata:Array<Locator>=await rows.all()
    for(let a of allrowdata.slice(1))
    {
        const data=await a.locator("td").allInnerTexts()
        console.log(data)

    }

    //fetch the book name of mukesh
     for(let a of allrowdata)
    {
       const cells=await a.locator("td").allInnerTexts()
       const book=cells[0];
       const author=cells[1];
       if(author=="Mukesh")
       {
        console.log(book)
       }
        

    }

    //using filter option
    const mukeshRow = rows.filter({ hasText: "Mukesh" })
const cells = await mukeshRow.locator("td").allInnerTexts()
console.log("Book by Mukesh:", cells[0])
})