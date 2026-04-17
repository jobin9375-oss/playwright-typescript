import { test,expect,Locator } from "@playwright/test";
test("@sanity test1", async ({page})=> //tagged as sanity
{
    console.log("this is sanity")
})
test("@regression test2", async ({page})=>
{
    console.log("this is regression")
})
test("@sanity@regression test3", async ({page})=>
{
    console.log("this is sanity+regression")
})

//below is the other method
test("test4",{tag:"@sanity"},async ({page})=>
{
    console.log("this is sanity on test 4")
})
test("test3",{tag:["@sanity","@regression"]}, async ({page})=> //taging multiple test 
{
    console.log("this is sanity+regression")
})