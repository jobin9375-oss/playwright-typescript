// install napm install csv-parse

import { test,expect,Locator } from "@playwright/test";
import fs from 'fs'
import { parse } from 'csv-parse/sync';
//reading path from csv
const csvpath="Test-data/datacsv.csv"
const filecontent=fs.readFileSync(csvpath,'utf-8')
const records:any=parse(filecontent,{columns:true,skip_empty_lines:true})

test.describe("login data driven test using Json",()=>
{
    for(let data of records)
    {
        test(`parametrized using jason for ${data.email} and ${data.password} `, async ({page})=>
        {
            await page.goto("https://demowebshop.tricentis.com/login")
    await page.locator("#Email").fill(data.email)
    await page.locator("#Password").fill(data.password)
    
    await page.locator(".button-1.login-button").click()
    if(data.validity=="valid")
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

    
