import { test,expect,Locator } from "@playwright/test";
test("multiselect", async ({page})=>
{
    await page.goto("https://testautomationpractice.blogspot.com/")
    const multiselect:Locator=page.locator("#colors");
    await multiselect.selectOption(["Red","Blue"]) //using viusible text
    await multiselect.selectOption(["red","green"])//using value
     await multiselect.selectOption([{label:"Yellow"},{label:"Green"}]) //using label
      await multiselect.selectOption([{index:1},{index:4}]) //using index

      //checking count

      const multiselectcount:Locator=page.locator("#colors option");
      expect(multiselectcount).toHaveCount(7)

      //checking option present
      const dropvalue:Array<string>=(await multiselectcount.allTextContents()).map(text=>text.trim())
      expect(dropvalue).toContain("Red")

      //checking if options are sorted

      const animaldropdownn:Locator=page.locator("#colors option");
      const animaloptions:Array<string>=(await animaldropdownn.allTextContents()).map(text=>text.trim())
      //const originalarray:Array<string>=animaloptions

    //   const sortedarray:Array<string>=animaloptions.sort() // we cannot use sot(), because it changes original array
    //   console.log(originalarray)
    //   console.log(sortedarray)

    //to avoid this issue we use special operator

    const originalarray:Array<string>=[...animaloptions]
    const sortedarray:Array<string>=animaloptions.sort()
    console.log(originalarray)
    console.log(sortedarray)
    expect(originalarray,"drop down is not sorted").toEqual(sortedarray)

})