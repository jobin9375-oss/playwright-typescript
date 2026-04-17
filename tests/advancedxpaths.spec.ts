import { test,expect,Locator } from "@playwright/test";
import { link } from "node:fs";
test("advanced xpath", async ({page})=>
{
    await page.goto("https://www.w3schools.com/html/html_tables.asp");
    const country=await page.locator("//td[normalize-space()='Germany']").textContent();
    expect(country).toBe("Germany");

    //parent
    const parentrow:Locator=page.locator("//td[normalize-space()='Germany']/parent::tr")
    expect(parentrow).toContainText("Maria Anders")
    console.log(await parentrow.allTextContents())

    //child

    const childelement:Locator=page.locator("//table[@id='customers']//tr[3]/child::td[2]")
    expect(await childelement.textContent()).toBe("Francisco Chang")
    //ancestor

    const table:Locator=page.locator("//td[normalize-space()='Germany']/ancestor::table")
    await expect(table).toHaveAttribute("id","customers")
    console.log(await table.textContent())

    //descendant

    const column:Locator=page.locator("//table[@id='customers']/descendant::td")
    expect(column).toHaveCount(18)

    //following 

    await expect(page.locator("//td[normalize-space()='Maria Anders']/following::td[1]")).toHaveText("Germany")

    //following-sibling

    await expect(page.locator("//td[normalize-space()='Maria Anders']/following-sibling::td")).toHaveCount(1)

    //preceding 
    await expect(page.locator("//td[normalize-space()='Maria Anders']/preceding::td")).toHaveCount(1)

    //preeding-sibling 

    await expect(page.locator("//td[normalize-space()='Maria Anders']/preceding-sibling::td")).toHaveCount(1)








})