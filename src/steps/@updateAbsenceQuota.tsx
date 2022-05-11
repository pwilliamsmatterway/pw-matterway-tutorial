import { Context } from 'library/context';
import { START_URL } from 'shared/constants';
import { EMPLOYEE_ID, END_DATE_INPUT, START_DATE_INPUT, TRANSACTION_ID } from 'shared/selectors';
import { EmployeeData, LeaveData } from 'shared/types';

export async function updateAbsenceQuotaStep(
  ctx: Context,
  data: {
    employee: EmployeeData;
    leave: LeaveData;
  },
) {
  console.log('step: updateAbsenceQuotaStep');
  const { page } = ctx;

  // Navigate
  await page.goto(START_URL);
  await page.waitForSelector(EMPLOYEE_ID);
  await page.type(EMPLOYEE_ID, `${data.employee.id}\n`);

  // Open transaction
  await page.waitForSelector(TRANSACTION_ID);
  await page.type(TRANSACTION_ID, '2006\n');

  // Fill form
  await page.waitForSelector(START_DATE_INPUT);
  await page.type(START_DATE_INPUT, data.leave.startDate);
  await page.type(END_DATE_INPUT, data.leave.endDate);

  // Save and submit
  await page.click('button'); // FIXME
}
