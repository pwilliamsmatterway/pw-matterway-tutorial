import { useSkillDebugger } from '@matterway/skill-debugger';
import { Context } from 'library/context';
import { showProgress } from 'library/progress';
import { ChildData, EmployeeData, LeaveData } from 'shared/types';
import { successStep } from './@success';
import { updateMasterDataStep } from './@updateMasterDataStep';

export async function enterLeaveDataStep(
  ctx: Context,
  data: {
    employee: EmployeeData,
    leave: LeaveData 
    child: ChildData
  },
) {
  console.log('step: enterLeaveDataStep');
  const { page, render, signal } = ctx;
  const pause = useSkillDebugger(signal);

  showProgress(ctx, 'Open the leave request...');
  await page.click('.open-attachment:nth-child(1)');

  // <- Here is a placeholder where we'll show a form later ->

  showProgress(ctx, 'Close the leave request...');
  await page.click('#image-viewer-overlay');


  // Write your code here
  // await pause();

  const { employee, leave, child } = data;
  // Jump to your next step here
  return await updateMasterDataStep(ctx, {employee, leave, child});
}
 