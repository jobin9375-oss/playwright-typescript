import { test,expect,Locator } from "@playwright/test";
test("multiselect", async ({page})=>
{
    await page.goto("https://testautomationpractice.blogspot.com/")
    const multiselect:Locator=page.locator("#colors option");
    const dropvalue:Array<string>=(await multiselect.allTextContents()).map(text=>text.trim())
//     let dupe:number=0

// for(let i = 0; i < dropvalue.length; i++) {
//     for(let j = i + 1; j < dropvalue.length; j++) {  // ✅ compare every pair
//         if(dropvalue[i] == dropvalue[j]) {
//             dupe++;
//             console.log(`Duplicate found: ${dropvalue[i]}`)
//         }
//     }
// }

// if(dupe == 0) {
//     console.log("No duplicate options present")
// } else {
//     console.log(`${dupe} duplicate(s) present`)
// }

//using set 

const uniquevalueset=new Set(dropvalue)
if(uniquevalueset.size==dropvalue.length)
{
    console.log("no duplicates present")

}
else
{
    console.log("duplicates present")

}


})

