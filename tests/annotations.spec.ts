import { test,expect,Locator } from "@playwright/test";
    
// test.only("test1", async ({page})=> //only executes this test
// {
//     console.log("test 1")
// })
// test.skip("test2", async ({page})=> //to skip the specific test
// {
//     console.log("test 2")
// })


//skip test based on condition

test("test3", async ({page})=> // here this will skip based on condition
{
    test.skip(true)
    console.log("test 3")
})
// test.fail("test4", async ({page})=>
// {
//     console.log("test 4")
// })
test.fixme("test5", async ({page})=> // will skip , need to mention if the test is partialy completed dont want run
{
    console.log("test 5")
})
test.fail("test6", async ({page})=> // here test wll be passed as we given fail and the test also failed
{
    console.log("test 6")
    let count=6
    expect(count).toBe(5)
})
test("test7", async ({page})=> // here this will skip based on condition
{

    test.slow() // triple the time of waitingtime
    console.log("test 7")
})

