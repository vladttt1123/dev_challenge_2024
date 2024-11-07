import { expect, Locator } from '@playwright/test';

export async function checkIfHrefAttributeIsNotPresent(locator: Locator, substring: string) {
  const elements = await locator.elementHandles();
  for (const element of elements) {
    const href = await element.getAttribute('href');
    expect(href).not.toContain(substring);
  }
}

