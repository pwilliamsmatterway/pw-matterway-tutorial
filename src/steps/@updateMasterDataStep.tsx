import { updateFamilyMembersStep } from './@updateFamilyMembers';
import { updateAbsenceQuotaStep } from './@updateAbsenceQuota';
import { Context } from 'library/context';
import { ChildData, EmployeeData, LeaveData } from 'shared/types';
import { connectToAgent } from '@matterway/agent-puppeteer-client/lib';
import { useAgentConnectionFactory } from '@matterway/background-hooks';
import { successStep } from './@success';
import { runJobsWithProgressList } from 'library/progress';

export async function updateMasterDataStep(
  ctx: Context,
  data: {
    employee: EmployeeData;
    leave: LeaveData;
    child: ChildData;
  },
) {

  // We connect to agent
  const agent = await connectToAgent(ctx.signal, {
    createAgentConnection: useAgentConnectionFactory(),
    // browserLocationPathForDebugging:
    //   '/Applications/Microsoft Edge.app/Contents/MacOS/Microsoft Edge',
  });

  await runJobsWithProgressList(
    ctx,
    [
      {
        title: 'Updating Family Members...',
        handler: async (ctx) => {
          const bgCtx = {...ctx, browser: agent, page: await agent.newPage()};
          await updateFamilyMembersStep(bgCtx, data);
        },
      },
      {
        title: 'Updating Absence Quota...',
        handler: async (ctx) => {
          const bgCtx = {...ctx, browser: agent, page: await agent.newPage()};
          await updateAbsenceQuotaStep(bgCtx, data);
        },
      },
    ],
    {
      concurrency: Infinity,
    },
  );

  await agent.disconnect();

  return await successStep(ctx)

  // ...
}