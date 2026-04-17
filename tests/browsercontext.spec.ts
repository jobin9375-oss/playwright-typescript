import { test,expect,Locator,Browser } from "@playwright/test";
import { Context } from "node:vm";
test("browser context and tabs ", async ({browser})=>
{
    const context=await browser.newContext()
    const page1=await context.newPage()
    await page1.goto("https://testautomationpractice.blogspot.com/")
    const [childpage]=await Promise.all([context.waitForEvent('page'),page1.getByRole('button',{name:'New Tab'}).click()]) // this return child page

    //above line page open and click on the tab should happen same time(parellel)thats why we gievn in promise.all()

    //switch between two pages
    const pagecount=context.pages()
    console.log(pagecount.length)
    const firstpagetitle=await pagecount[0].title()
    const secondpagetitle=await pagecount[1].title()
    console.log("page titles",firstpagetitle,secondpagetitle)



    
    
    
})