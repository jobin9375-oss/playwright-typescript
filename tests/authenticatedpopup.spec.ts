import { test,expect,Locator,Browser } from "@playwright/test";
import { Context } from "node:vm";
test("handling popups ", async ({browser})=>
{
    const context=await browser.newContext({httpCredentials:{username:'admin',password:'admin'}})
    const page1=await context.newPage()
    await page1.goto("https://the-internet.herokuapp.com/basic_auth")
    await page1.waitForLoadState('domcontentloaded')
    const text=await page1.locator("div[class='example'] p").textContent()
    expect(text).toContain("Congratulations")
})