import { Locator } from '@playwright/test';
import { BasePage } from './BasePage';

export class HomePage extends BasePage {

  readonly hamburgerMenu: Locator = this.page.locator("//div[contains(@class, 'hamburger-menu')]").nth(2);
  readonly aboutLink: Locator = this.page.getByRole('link', { name: 'About', exact: true }).nth(2);
  readonly judgesLink: Locator = this.page.getByRole('link', { name: 'Judges', exact: true }).nth(3);
  readonly partnersLink: Locator = this.page.getByRole('heading', { name: "Partners", exact: true }).nth(5);
  readonly contactEmail: Locator = this.page.getByRole('link', { name: 'E: hello@devchallenge.it' });

  async navigate() {
    await this.page.goto('https://www.devchallenge.it');
  }

  async openMenu() {
    await this.hamburgerMenu.click();
  }

  async goToAboutPage() {
    await this.aboutLink.click();
  }

  async goToJudgesPage() {
    await this.judgesLink.click();
  }

  async goToPartnersPage() {
    await this.partnersLink.click();
  }
}
