import { Context } from 'library/context';
import { START_URL } from 'shared/constants';
import {
  BIRTH_DATE,
  BIRTH_NAME,
  EMPLOYEE_ID,
  FIRST_NAME,
  LAST_NAME,
  MEMBER_TYPE,
  REFERENCE_PERSON_NUMBER,
  TRANSACTION_ID,
} from 'shared/selectors';
import { ChildData, EmployeeData } from 'shared/types';

export async function updateFamilyMembersStep(
  ctx: Context,
  data: {
    employee: EmployeeData;
    child: ChildData;
  },
) {
  console.log('step: updateFamilyMembersStep');
  const { page } = ctx;

  // Navigate
  await page.goto(START_URL);
  await page.waitForSelector(EMPLOYEE_ID);
  await page.type(EMPLOYEE_ID, `${data.employee.id}\n`);

  // Open transaction
  await page.waitForSelector(TRANSACTION_ID);
  await page.type(TRANSACTION_ID, '0021\n');

  // Fill form
  await page.waitForSelector(MEMBER_TYPE);
  await page.select(MEMBER_TYPE, '2');
  await page.type(FIRST_NAME, data.child.firstName);
  await page.type(LAST_NAME, data.child.lastName);
  await page.type(BIRTH_DATE, data.child.birthDate);
  await page.type(BIRTH_NAME, data.child.lastName);
  await page.type(REFERENCE_PERSON_NUMBER, data.employee.id);

  // Save and submit
  await page.click('button'); // FIXME
}
