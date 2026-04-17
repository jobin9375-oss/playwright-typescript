import { test,expect,Locator } from "@playwright/test";
test.describe('gropu1',async()=>//group1
    
{ 
test("test1", async ({page})=>
{
    console.log("test 1")
})
test("test2", async ({page})=>
{
    console.log("test 2")
})

})

test.describe('group2',async ()=> //group2
{

test("test3", async ({page})=>
{
    console.log("test 3")
})
test("test4", async ({page})=>
{
    console.log("test 4")
})

})
