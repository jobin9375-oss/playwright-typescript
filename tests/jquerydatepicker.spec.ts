import { test,expect,Locator, Page } from "@playwright/test";
async function selectdate(targetyear:string,targetmonth:string,targetdate:string,page:Page,isfuture:boolean)
{
    while(true)
    {
        const currentmonth=await page.locator(".ui-datepicker-month").textContent()
        const currentyear=await page.locator(".ui-datepicker-year").textContent()
        if(currentyear==targetyear&&currentmonth==targetmonth)
        {
            break;
        }
        else if(isfuture)
        {
            await page.locator(".ui-datepicker-next").click();
        }
        else
        {
            await page.locator(".ui-datepicker-prev").click();
            
        }
               
    
    }
    const calendardate=await page.locator(".ui-datepicker-calendar td a").all()
        for(let d of calendardate)
        {
            const dd=await d.innerText()
            if(dd==targetdate)
            {
                await d.click()
                break;

            }

        }

}
test("Jquery date picker", async ({page})=>
{
    await page.goto("https://testautomationpractice.blogspot.com/")
    const datepicker:Locator=page.locator("input#datepicker");
    //await datepicker.fill("10/04/2026") // direct method

    //using loops and logic
    const year:string='2022';
    const month:string='April';
    const date:string='20';
    await datepicker.click();
    const isfuture = new Date(`${month} ${date}, ${year}`) > new Date();
    await selectdate(year,month,date,page,isfuture)
    
})