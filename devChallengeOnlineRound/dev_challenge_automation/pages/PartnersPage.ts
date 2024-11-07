import { Locator } from '@playwright/test';
import { BasePage } from './BasePage';

export class PartnersPage extends BasePage {

  readonly partnersList: Locator = this.page.locator('.project-grid > * > *');
  readonly infoPartnersList: Locator = this.page.locator('.infopartners > * > *');

}
