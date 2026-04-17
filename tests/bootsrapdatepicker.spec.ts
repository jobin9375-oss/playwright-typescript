import { test,expect,Locator } from "@playwright/test";
test("pagination table display data", async ({page})=>
{
    await page.goto("https://www.booking.com/")
    await page.getByRole('button',{name:"Dismiss sign-in info."}).click()
    const datebox:Locator=page.getByTestId("searchbox-dates-container");
    await datebox.click()
    const checkinday="24"
    const checkinmonth="December"
    const checkinyear="2026"
    while(true)
    {
    const checkindate=await page.locator("h3.e7addce19e.af236b7586").first().innerText();
    const currentmonth=checkindate.split(" ")[0];
    const currentyear=checkindate.split(" ")[1];
    if(currentmonth==checkinmonth&&currentyear==checkinyear)
    {
        break;
    }
    await page.getByRole('button',{name:"Next month"}).click()



    }
    const checkindates=await page.locator(".b8fcb0c66a").first().locator("td>span").all()
    for(let d of checkindates)
    {
        const datetext=await d.innerText()
        if(checkinday==datetext)
        {
            await d.click()
        }
    }

    const checkoutday="30"
    const checkoutmonth="December"
    const checkoutyear="2026"
    if(checkinmonth==checkoutmonth&&checkinyear==checkoutyear)
    {

    }
    else{

    while(true)
    {
    const checkoutdate=await page.locator("h3.e7addce19e.af236b7586").last().innerText();
    const currentmonth=checkoutdate.split(" ")[0];
    const currentyear=checkoutdate.split(" ")[1];
    if(currentmonth==checkoutmonth&&currentyear==checkoutyear)
    {
        break;
    }
    await page.getByRole('button',{name:"Next month"}).click()



    }
}
    const checkoutdates=await page.locator(".b8fcb0c66a").locator("td>span").all()
    for(let d of checkoutdates)
    {
        const datetext=await d.innerText()
        if(checkoutday==datetext)
        {
            await d.click()
            break
        }
    }
    


})