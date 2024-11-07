import { Locator } from '@playwright/test';
import { BasePage } from './BasePage';

export class JudgesPage extends BasePage {

  readonly testingJudges: Locator = this.page.locator('.testing-judges > * > *');

  async getTestingJudgesCount() {
    return await this.testingJudges.count();
  }
}
