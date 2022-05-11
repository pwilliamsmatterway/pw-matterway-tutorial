import { useSkillDebugger } from '@matterway/skill-debugger';
import { Context } from 'library/context';
import { EmployeeData, LeaveData } from 'shared/types';

export async function updateAbsenceQuotaStep(
  ctx: Context,
  data: {
    employee: EmployeeData;
    leave: LeaveData;
  },
) {
  console.log('step: updateAbsenceQuotaStep');
  const pause = useSkillDebugger(ctx.signal);
  const {page} = ctx;

  // Navigate
  await page.goto('https://employee-master-data.demo.matterway.io');
  await page.waitForSelector('#employee-id');
  await page.type('#employee-id', `${data.employee.id}\n`);

  // Open transaction
  await page.waitForSelector('#transaction-id');
  await page.type('#transaction-id', '2006\n');

  // Fill form
  await page.waitForSelector('[name="startDate"]');
  await page.type('[name="startDate"]', data.leave.startDate);
  await page.type('[name="endDate"]', data.leave.endDate);

  // Save and submit
  await page.click('button'); // FIXME
}