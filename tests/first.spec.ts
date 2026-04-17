import { test,expect } from "@playwright/test";
test("sample", async ({page})=>
{
    await page.goto("https://www.google.com/");
    //expect(page).toHaveTitle("Google")
    let t:string=await page.title();
    expect(t).toBe("Google")

})