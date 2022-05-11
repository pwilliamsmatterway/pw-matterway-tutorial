import {BackgroundReact as React, getContentComponentsProxy} from '@matterway/background-react';
import {useSkillDebugger} from '@matterway/skill-debugger';
import { getValueByName } from 'library/automation';
import type {Context} from 'library/context';
import { showProgress } from 'library/progress';
import {successStep} from 'steps/@success';
import { enterLeaveDataStep } from './@enterLeaveData';

type Maybe<T> = T | undefined | null

export async function extractDataStep(ctx: Context) {

  console.log('step: extractDataStep');
  showProgress(ctx, 'Extracting data from request...');
  const {browser, page, render} = ctx;

  await getValueByName(ctx, "incident.employeeId")
  const employeeId: Maybe<string> = await getValueByName(ctx, "incident.employeeId")
  const employeeFullName: Maybe<string> = await getValueByName(ctx, 'incident.employeeFullName')



    // Jump to your next step here
    return await enterLeaveDataStep(ctx, {
        employee: {
          id: employeeId,
          fullName: employeeFullName,
        },
        child: {
          firstName: "Paal",
          lastName: "Williams",
          birthDate: "03/06/1995"
            
        },
        leave: {
          startDate: "123",
          endDate: "123"
        }
      });
}
