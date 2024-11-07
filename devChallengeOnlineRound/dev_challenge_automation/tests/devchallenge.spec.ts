import { test, expect } from '@playwright/test';
import { HomePage } from '../pages/HomePage';
import { JudgesPage } from '../pages/JudgesPage';
import { PartnersPage } from '../pages/PartnersPage';
import { checkIfHrefAttributeIsNotPresent } from '../utils/helperFunctions';

let homePage: HomePage;
let judgesPage: JudgesPage;
let partnersPage: PartnersPage;

test.beforeEach(async ({ page }) => {
  homePage = new HomePage(page);
  judgesPage = new JudgesPage(page);
  partnersPage = new PartnersPage(page);
  await homePage.navigate();
});

test('Case #001 - Contact email is visible', async () => {
  await homePage.openMenu();
  await homePage.goToAboutPage();
  await expect(homePage.contactEmail).toBeVisible();
});

test('Case #002 - Count judges', async () => {
  await homePage.openMenu();
  await homePage.goToJudgesPage();
  await expect(await judgesPage.getTestingJudgesCount()).toBe(7);

});

test('Case #003 - No mobile partners', async ({ page }) => {
  await page.setViewportSize({ width: 360, height: 800 });
  await homePage.openMenu();
  await homePage.goToPartnersPage();
  // check Apple Inc is not present in Partners list
  await checkIfHrefAttributeIsNotPresent(partnersPage.partnersList, 'Apple Inc');
  // check Apple Inc is not present in the info Partners list
  await checkIfHrefAttributeIsNotPresent(partnersPage.infoPartnersList, 'Apple Inc');
});
