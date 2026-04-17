//install npam install xlsx

import { test,expect,Locator } from "@playwright/test";
import fs from 'fs'
import * as XLSX from 'xlsx'
//reading path from excel
const excelpath="Test-data/dataexcel.xlsx"
const workbook=XLSX.readFile(excelpath)
const sheetname=workbook.SheetNames[0]
const worksheet=workbook.Sheets[sheetname]
const records:any=XLSX.utils.sheet_to_json(worksheet)
console.log(records)


test.describe("login data driven test using Json",()=>
{
    for(let {email,password,validity} of records)
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

    
