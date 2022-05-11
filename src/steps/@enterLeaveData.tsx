import { Context } from 'library/context';
import { showProgress } from 'library/progress';
import { IMAGE_VIEWER_OVERLAY, OPEN_ATTACHMENT_SELECTOR } from 'shared/selectors';
import { ChildData, EmployeeData, LeaveData } from 'shared/types';
import { updateMasterDataStep } from './@updateMasterDataStep';

export async function enterLeaveDataStep(
  ctx: Context,
  data: {
    employee: EmployeeData;
    leave: LeaveData;
    child: ChildData;
  },
) {
  console.log('step: enterLeaveDataStep');
  const { page } = ctx;
  showProgress(ctx, 'Open the leave request...');
  await page.click(OPEN_ATTACHMENT_SELECTOR);

  showProgress(ctx, 'Close the leave request...');
  await page.click(IMAGE_VIEWER_OVERLAY);

  const { employee, leave, child } = data;

  return await updateMasterDataStep(ctx, { employee, leave, child });
}
