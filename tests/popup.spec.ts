import { test,expect,Locator,Browser } from "@playwright/test";
import { Context } from "node:vm";
test("handling popups ", async ({browser})=>
{
    const context=await browser.newContext()
    const page1=await context.newPage()
    await page1.goto("https://testautomationpractice.blogspot.com/")
    // const [popup1]=await Promise.all([page1.waitForEvent('popup'),page1.getByRole('button',{name:"Popup Windows"}).click()])
    // await page1.waitForTimeout(5000)
    // const pages=context.pages()
    // console.log(pages.length)
    // console.log(pages[0].url())
    // console.log(pages[1].url())
    // console.log(pages[2].url())
    // for(let pg of pages)
    // {
    //     const title=await pg.title()
    //     if(title.includes('Playwright'))
    //     {
    //         await pg.getByRole('link',{name:"Get started"}).click()
    //         await pg.close()
    //     }

    // }

    //anoather way
    

    //✅ Use context.on to COLLECT all popups as they open
    const popups: any[] = []
    context.on('page', (page) => {
        popups.push(page)
        console.log("New popup detected:", page.url()) // 👈 see how many actually open
    })

    await page1.getByRole('button', { name: "Popup Windows" }).click()
    await page1.waitForTimeout(5000) // give time for all popups to open

    console.log("Total popups opened:", popups.length) // 👈 check this number first!

    // ✅ Now read each popup after load
    for (let popup of popups) {
    await popup.waitForLoadState('domcontentloaded')
    console.log(popup.url())
}
});