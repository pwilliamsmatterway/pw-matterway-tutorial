import type { Context } from 'library/context';

export async function getValue(ctx: Context, selector: string): Promise<string> {
  console.debug('getValue: getting value for selector', selector);
  await ctx.page.waitForSelector(selector);
  const result = await ctx.page.$eval(selector, (el) =>
    (el as HTMLInputElement).value.trim(),
  );
  console.debug('getValue: value for selector', selector, 'is', result);
  return result;
}

export async function getValueByName(ctx: Context, name: string): Promise<string> {
    return await getValue(ctx, `[name="${name}"]`);
  }