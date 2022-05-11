import type {Context} from 'library/context';
import {showMessage} from 'library/message';
import manifest from 'manifest.json';
import { extractDataStep } from './@extractDataStep';

export async function startStep(ctx: Context) {
  console.log('step: startStep');

  await showMessage(ctx, {
    title: manifest.name,
    description: manifest.description,
    text: 'Assistant will help you record this Parental Leave, and update the family members and leave quota in the master data system.',
    buttons: [
      {text: "Let's go!", value: 'ok'},
    ],
  });

  return await extractDataStep(ctx);
}
