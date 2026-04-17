import { test,expect,Locator } from "@playwright/test";
import fs from 'fs'
//reading path
const jsonpath="Test-data/data.json"
const logindata:any=JSON.parse(fs.readFileSync(jsonpath,'utf-8')) //will return an array with json dat


test.describe("login data driven test using Json",async()=>
{
    for(const {email,password,validity} of logindata)
    {
        test(`parametrized using jason for ${email} and ${password} `, async ({page})=>
        {
            await page.goto("https://demowebshop.tricentis.com/login")
    await page.locator("#Email").fill(email)
    await page.locator("#Password").fill(password)
    
    await page.locator(".button-1.login-button").click()
    if(validity=="valid")
    {
      const logout:Locator=page.locator(".ico-logout");
       await expect(logout).toBeVisible();

    }
    else{
         const errormessage:Locator=page.locator(".validation-summary-errors span")
    await expect(errormessage).toBeVisible()
    await expect(page).toHaveURL("https://demowebshop.tricentis.com/login")

    }

   

   

        })

        
    

    }
    
})

    
