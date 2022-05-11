import { getValueByName } from 'library/automation';
import type { Context } from 'library/context';
import { showProgress } from 'library/progress';
import { enterLeaveDataStep } from './@enterLeaveData';

type Maybe<T> = T | undefined | null;

export async function extractDataStep(ctx: Context) {
  console.log('step: extractDataStep');
  showProgress(ctx, 'Extracting data from request...');

  await getValueByName(ctx, 'incident.employeeId');
  const employeeId: Maybe<string> = await getValueByName(ctx, 'incident.employeeId');
  const employeeFullName: Maybe<string> = await getValueByName(ctx, 'incident.employeeFullName');

  return await enterLeaveDataStep(ctx, {
    employee: {
      id: employeeId,
      fullName: employeeFullName,
    },
    child: {
      firstName: 'Paal',
      lastName: 'Williams',
      birthDate: '03/06/1995',
    },
    leave: {
      startDate: '123',
      endDate: '123',
    },
  });
}
