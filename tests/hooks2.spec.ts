import { test,expect,Locator, Page } from "@playwright/test";
let page:Page;
test.beforeAll('open the application',async ({browser})=>
{
    page=await browser.newPage()
    await page.goto("https://www.demoblaze.com/")
    
})
test.afterAll('closing the app',async ()=>
{
    await page.close()

})
test.beforeEach('login',async ()=>
{
    await page.locator("#login2").click()
    await page.locator("#loginusername").fill("pavanol")
    await page.locator("#loginpassword").fill("test@123")
    await page.getByRole('button',{name:"Log in"}).click()

})
test.afterEach('logout',async ()=>
{
    await page.locator("#logout2").click()

})
test('find products', async ()=>
{
    const prodcuts:Locator=page.locator("div.col-lg-9 h4 a");
    await expect(prodcuts).toHaveCount(9)
})
test('add to cart', async ()=>
{
    await page.getByRole('link',{name:'Iphone 6 32gb'}).click()
    page.on('dialog',async (dialog)=>
    {
        await dialog.accept()


    })
    await page.getByRole('link',{name:'Add to cart'}).click()
})
test('view cart', async ()=>
{
    await page.getByRole('link',{name:'Cart'}).click()
    await expect(page.locator("table.table")).toBeVisible()
})

