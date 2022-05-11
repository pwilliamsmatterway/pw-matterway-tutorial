import { useSkillDebugger } from "@matterway/skill-debugger";
import { Context } from "library/context";
import { ChildData, EmployeeData } from "shared/types";

export async function updateFamilyMembersStep(
    ctx: Context,
    data: {
      employee: EmployeeData;
      child: ChildData;
    },
  ) {
    console.log('step: updateFamilyMembersStep');
    const pause = useSkillDebugger(ctx.signal);
    const {page} = ctx;
  
    // Navigate
    await page.goto('https://employee-master-data.demo.matterway.io');
    await page.waitForSelector('#employee-id');
    await page.type('#employee-id', `${data.employee.id}\n`);
  
    // Open transaction
    await page.waitForSelector('#transaction-id');
    await page.type('#transaction-id', '0021\n');
  
    // Fill form
    await page.waitForSelector('[name="memberType"]');
    await page.select('[name="memberType"]', '2');
    await page.type('[name="firstName"]', data.child.firstName);
    await page.type('[name="lastName"]', data.child.lastName);
    await page.type('[name="birthDate"]', data.child.birthDate);
    await page.type('[name="birthName"]', data.child.lastName);
    await page.type('[name="referencePersonNumber"]', data.employee.id);
  
    // Save and submit
    await page.click('button'); // FIXME
  }